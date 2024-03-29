import React, { useState, useEffect, useRef } from "react";
import {
  GetAllAction,
  SaveAction,
  DeleteAction,
} from "../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Dialog } from "primereact/dialog";
import { Toolbar } from "primereact/toolbar";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import "./test.css";
import Loader from "../utility/loader/loader";
import { OnLoader, OffLoader } from "../../redux/action/loaderAction";

const ShowTest = ({ changeIsAddnew }) => {
  const dispatch = useDispatch();
  const tests = useSelector((state) => state.reducer.data);
  const [test, setTest] = useState({});
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const [formDialog, setformDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deleteTestDialog, setdeleteTestDialog] = useState(false);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [isDeleted, setIsDeleted] = useState(0);

  const isRemoved = [
    { id: 0, title: "No" },
    { id: 1, title: "Yes" },
  ];

  useEffect(() => {
    dispatch(OnLoader());
    dispatch(GetAllAction());
    dispatch(OffLoader());
  }, [dispatch]);

  const columns = [
    { field: "id", header: "ID" },
    { field: "title", header: "Title" },
  ];
  const dynamicColumns = columns.map((col, i) => {
    return <Column key={col.field} field={col.field} header={col.header} />;
  });

  const header = (
    <div className="flex justify-content-between align-items-center">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
      <span>
        <Button
          label="Refresh"
          icon="pi pi-refresh"
          className="p-button-info  mr-2 p-button-text"
          onClick={()=>{refresh()}}
        />
        <Button
          label="New"
          icon="pi pi-plus"
          className="p-button-success mr-2 p-button-text"
          onClick={()=>{openNew()}}
        />
      </span>
    </div>
  );
  const openNew = () => {
    setId(null);
    setTitle("");
    setDate(Date.now.toString());
    setIsDeleted(0);
    setSubmitted(false);
    setformDialog(true);
  };
  const refresh = () => {
    dispatch(OnLoader());
    dispatch(GetAllAction());
    dispatch(OffLoader());
  };
  const hideDialog = () => {
    setSubmitted(false);
    setformDialog(false);
  };
  const savetest = () => {
    dispatch(OnLoader());
    setSubmitted(true);

    let data = {
      id: id,
      title: title,
      isRemoved: isDeleted,
      updatedAt: date,
    };
    dispatch(SaveAction(data));

    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Saved Successfully",
      life: 3000,
    });
    dispatch(OffLoader());
    hideDialog();
  };

  const edittest = (t) => {
    t.updatedAt = Date.parse(t.updatedAt);
    let a = t.isRemoved ? 1 : 0;
    setId(t.id);
    setTitle(t.title);
    setDate(t.updatedAt.toString());
    setIsDeleted(a);
    setformDialog(true);
  };
  const confirmDeleteProduct = () => {
    setdeleteTestDialog(true);
  };

  const deleteUserType = () => {
    dispatch(OnLoader());
    setdeleteTestDialog(false);
    dispatch(DeleteAction(id));
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Saved Successfully",
      life: 3000,
    });
    dispatch(OffLoader());
  };
  const hideDeleteTestDialog = () => {
    setdeleteTestDialog(false);
  };
  const deleteTestDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteTestDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteUserType}
      />
    </React.Fragment>
  );
  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="Refresh"
          icon="pi pi-refresh"
          className="p-button-info  mr-2 p-button-text"
          onClick={refresh}
        />
        <Button
          label="New"
          icon="pi pi-plus"
          className="p-button-success mr-2 p-button-text"
          onClick={openNew}
        />
      </React.Fragment>
    );
  };
  const formDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button-text"
        onClick={savetest}
      />
      <Button
        label="Delete"
        icon="pi pi-trash"
        className="p-button-text"
        onClick={() => confirmDeleteProduct()}
      />
    </React.Fragment>
  );

  const onInputChange = (e, title) => {
    const val = (e.target && e.target.value) || "";
    let _test = { ...test };
    _test[`${title}`] = val;
    setTitle(val);

    setTest(_test);
  };
  const ondateChange = (e) => {
    const val = e.value;
    let _test = { ...test };
    _test.updatedAt = val;
    setDate(val);
    setTest(_test);
  };
  const onInputNumberChange = (e) => {
    setId(e.value);
  };
  const onDropDownChange = (e) => {
    const val = e.value;
    let _test = { ...test };
    _test.isRemoved = val;
    setIsDeleted(val);
    setTest(_test);
  };
  return (
    <div className="main-container">
      <Toast ref={toast} />
      <Loader />

      {/* <Toolbar className="mb-4" right={rightToolbarTemplate}></Toolbar> */}

      <div className="row">
        <div className="col-md-12 datatable">
          <DataTable
            value={tests}
            selectionMode="single"
            selection={test}
            onRowDoubleClick={(e) => {
              edittest(e.data);
            }}
            scrollable="true"
            scrollDirection="vertical"
            scrollHeight="460px"
            header={header}
            responsiveLayout="scroll"
            dataKey="id"
            paginator
            rows={100}
            size="large"
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Tests"
            globalFilter={globalFilter}
          >
            {dynamicColumns}
          </DataTable>
        </div>
        <Dialog
          visible={formDialog}
          style={{ width: "450px" }}
          header="User Type Details"
          modal
          className="p-fluid grid formgrid"
          footer={formDialogFooter}
          onHide={hideDialog}
        >
          <div className="field pb-2 pt-3">
            <label htmlFor="ID">ID</label>
            <InputNumber
              id="ID"
              value={id}
              onValueChange={(e) => onInputNumberChange(e)}
              mode="decimal"
              readOnly={true}
            />
          </div>
          <div className="field pb-2 pt-1">
            <label htmlFor="title">Title</label>
            <InputText
              id="title"
              value={title}
              onChange={(e) => onInputChange(e, "title")}
              required
              autoFocus
              className={classNames({ "p-invalid": submitted && !test.name })}
            />
            {submitted && !test.title && (
              <small className="p-error">Title is required.</small>
            )}
          </div>

          <div className="field pb-2 pt-1">
            <label htmlFor="updatedAt">Updated At</label>
            <Calendar
              id="updatedAt"
              name="updatedAt"
              value={date}
              onChange={(e) => ondateChange(e)}
              showIcon
            />
          </div>
          <div className="field pb-3 pt-1">
            <label htmlFor="isRemoved">Is Removed</label>
            <Dropdown
              value={isDeleted}
              options={isRemoved}
              onChange={onDropDownChange}
              optionValue="id"
              optionLabel="title"
              placeholder="Select a option"
            />
          </div>
          {/* <div className="field">
                    <label className="mb-3">Category</label>
                    <div className="formgrid grid">
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={test.category === 'Accessories'} />
                            <label htmlFor="category1">Accessories</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={test.category === 'Clothing'} />
                            <label htmlFor="category2">Clothing</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={test.category === 'Electronics'} />
                            <label htmlFor="category3">Electronics</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={test.category === 'Fitness'} />
                            <label htmlFor="category4">Fitness</label>
                        </div>
                    </div>
                </div> */}

          {/* <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="price">Price</label>
                        <InputNumber id="price" value={test.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="field col">
                        <label htmlFor="quantity">Quantity</label>
                        <InputNumber id="quantity" value={test.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} integeronly />
                    </div>
                </div> */}
        </Dialog>

        <Dialog
          visible={deleteTestDialog}
          style={{ width: "450px" }}
          header="Confirm"
          modal
          footer={deleteTestDialogFooter}
          onHide={hideDeleteTestDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {test && (
              <span>
                Are you sure you want to delete <b>{test.name}</b>?
              </span>
            )}
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default ShowTest;
