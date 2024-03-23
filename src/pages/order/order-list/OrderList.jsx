import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import MenuIcon from "../icons/MenuIcon";
import { useTheme } from "@mui/material/styles";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Chip from "@mui/material/Chip";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import FilterListOffOutlinedIcon from "@mui/icons-material/FilterListOffOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import Collapse from "@mui/material/Collapse";
import { getDataWithToken } from "../../../services/GetDataService";
import { AuthContext } from "../../../context/AuthContext";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import moment from "moment";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import axios from "axios";
import { useSnackbar } from "notistack";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import PulseLoader from "react-spinners/PulseLoader";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MoneyOffCsredOutlinedIcon from "@mui/icons-material/MoneyOffCsredOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";
import DetailDialog from "../DetailDialog";
const OrderList = () => {
  const theme = useTheme();
  const { prokash_user, logout } = useContext(AuthContext);
  const [openFilter, setOpenFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [name, setName] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [message, setMessage] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, settoDate] = useState(null);
  const [createdStartTime, setCreatedStartTime] = useState(null);
  const [createdEndTime, setCreatedEndTime] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const [downloadloading, setDownloadloading] = useState(false);
  const [open, setOpen] = useState(false);

  const [openRefund, setOpenRefund] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [updateLoading, setUpdateLoading] = useState(false);
  const [openDetailDialog, setOpenDetailDialog] = useState(false);
  const [detailData, setDetailData] = useState({});
  const handleDetailClickOpen = (data) => {
    setDetailData(data);
    setOpenDetailDialog(true);
  };

  const handleDetailClose = () => {
    setDetailData({});
    setOpenDetailDialog(false);
  };
  const handleClickOpen = (id) => {
    setUpdateId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenRefund = (id) => {
    setUpdateId(id);
    setOpenRefund(true);
  };

  const handleCloseRefund = () => {
    setOpenRefund(false);
  };
  const handleSnakbarOpen = (msg, vrnt) => {
    let duration;
    if (vrnt === "error") {
      duration = 3000;
    } else {
      duration = 1000;
    }
    enqueueSnackbar(msg, {
      variant: vrnt,
      autoHideDuration: duration,
    });
  };

  const handleChangePage = (event, newPage) => {
    let pageNo = newPage + 1;
    getData(pageNo);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, rowsPerPage));
    setPage(0);
  };
  const pageLoading = () => {
    let rows = [];
    let cellNo = prokash_user?.permission?.some(
      (el) => el.name === "order-update"
    )
      ? 4
      : 4;
    for (let i = 0; i < 10; i++) {
      let cells = [];

      for (let j = 0; j < cellNo; j++) {
        cells.push(
          <TableCell key={j} sx={{ py: 1.5 }}>
            <Skeleton></Skeleton>
          </TableCell>
        );
      }
      rows.push(<TableRow key={i}>{cells}</TableRow>);
    }

    return rows;
  };
  const clearFilter = (event) => {
    setName("");
    setInvoiceNo("");
    // setStatus("");
    setCreatedStartTime(null);
    setCreatedEndTime(null);
    setPage(0);
    let newUrl = `api/order`;
    getData("", newUrl);
  };
  const getData = async (pageNO, newUrl) => {
    setLoading(true);
    // setUserList([]);
    setMessage("");
    let newPageNO;
    // let url;
    if (pageNO) {
      newPageNO = pageNO;
    } else {
      newPageNO = 1;
    }
    // if (newUrl) {
    //   url = newUrl;
    // } else {
    //   let newStatus = status;
    //   let newCreatedStartTime = "";
    //   let newCreatedEndTime = "";
    //   if (status === "None") {
    //     newStatus = "";
    //   }
    //   if (createdStartTime !== null) {
    //     // newCreatedStartTime = moment(createdStartTime).format(
    //     //   "YYYY-MM-DD HH:mm:ss"
    //     // );
    //     newCreatedStartTime = dayjs(createdStartTime).format("YYYY-MM-DD");
    //   }
    //   if (createdEndTime !== null) {
    //     // newCreatedEndTime = moment(createdEndTime).format(
    //     //   "YYYY-MM-DD HH:mm:ss"
    //     // );
    //     newCreatedEndTime = dayjs(createdEndTime).format("YYYY-MM-DD");
    //   }

    //   url = `api/order?promotion=${name.trim()}&invoice_no=${invoiceNo.trim()}&gender=${gender}&status=${newStatus}&from=${newCreatedStartTime}&to=${newCreatedEndTime}&page=${newPageNO}`;
    // }
    let url = `api/customer/order?page=${newPageNO}`;
    let res = await getDataWithToken(url, prokash_user.token);
    // console.log("res", res);
    if (res?.status === 401 || res?.status === 403) {
      logout();
      handleSnakbarOpen("Your session is out", "error");
      return;
    }

    if (res?.status > 199 && res?.status < 300) {
      setTotalData(res.data.data.total);
      setRowsPerPage(res.data.data.per_page);
      if (res.data.data.data.length > 0) {
        setList(res.data.data.data);
      } else {
        setMessage(res.data.message);
        setList([]);
      }
    } else {
      setMessage(res.data.message);
    }
    setLoading(false);
  };

  const checkCreateAndUpdatedSame = (createdAt, updatedAt) => {
    // Convert strings to Date objects
    const createdDate = new Date(createdAt);
    const updatedDate = new Date(updatedAt);

    // Compare the Date objects
    if (createdDate.getTime() === updatedDate.getTime()) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    // setLoading(true);
    getData();
  }, []);

  return (
    <div>
      <Container maxWidth="lg" className="container" sx={{ my: 4 }}>
        <div style={{ minHeight: "80vh" }}>
          <h3
            className="title_semibold_medium mb12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Campaign List
          </h3>
          <Paper
            sx={{
              p: 3,
              pb: 0,
              boxShadow: "none",
              border: "2px solid #f4f4f4",
            }}
          >
            <TableContainer
              style={{
                overflowX: "auto",
                minWidth: "100%",
                width: "100%",
                // width: "Calc(100vw - 385px)",
                // maxHeight: "Calc(100vh - 280px)",
              }}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ whiteSpace: "nowrap" }}>
                      Campaign ID
                    </TableCell>
                    <TableCell>Promotion</TableCell>
                    {/* <TableCell>Amount</TableCell>
                  <TableCell sx={{ whiteSpace: "nowrap" }} align="center">
                    Promotion Period
                  </TableCell> */}
                    {/* <TableCell>gender</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Location</TableCell>  */}
                    {/* <TableCell>Note</TableCell>
                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    Created At
                  </TableCell>
                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    Updated At
                  </TableCell>
                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    Created By
                  </TableCell>
                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    Updated By
                  </TableCell> */}
                    <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
                      Status
                    </TableCell>
                    {/* {prokash_user?.permission?.some(
                  (el) => el.name === "order-update"
                ) && ( */}
                    <TableCell sx={{ whiteSpace: "nowrap" }} align="right">
                      Actions
                    </TableCell>
                    {/* )} */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!loading &&
                    list?.length > 0 &&
                    list?.map((row, i) => (
                      <TableRow
                      // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell
                          sx={{
                            // color: `${theme.palette.primary.main}`,
                            fontWeight: 500,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {row?.id}
                        </TableCell>
                        <TableCell>{row?.promotion}</TableCell>
                        {/* <TableCell
                        sx={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        Tk. {row?.amount}
                      </TableCell>
                      <TableCell align="center">
                        {row?.promotion_period}{" "}
                        {parseInt(row?.promotion_period) > 1 ? "Days" : "Day"}
                      </TableCell> */}
                        {/* <TableCell>{row?.gender}</TableCell>
                      <TableCell
                        sx={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row?.min_age} - {row?.max_age}
                      </TableCell>
                      <TableCell>
                        {row?.divisions?.toString()}
                        
                      </TableCell>

                      
                      <TableCell sx={{ width: "190px" }}>
                        {row?.note === null
                          ? "-------"
                          : row?.note === ""
                          ? "-------"
                          : row?.note}
                      </TableCell>
                      <TableCell sx={{ minWidth: "90px" }}>
                        {" "}
                        {moment(row?.created_at).format(
                          "DD MMM, YYYY, HH:mm:ss a"
                        )}
                      </TableCell>
                      <TableCell sx={{ minWidth: "90px" }}>
                        {checkCreateAndUpdatedSame(
                          row?.created_at,
                          row?.updated_at
                        ) ? (
                          "-------"
                        ) : (
                          <>
                            {moment(row?.updated_at).format(
                              "DD MMM, YYYY, HH:mm:ss a"
                            )}
                          </>
                        )}
                      </TableCell>

                      <TableCell sx={{ whiteSpace: "nowrap" }}>
                        {" "}
                        {row.created_by !== null ? row.created_by.name : "Self"}
                      </TableCell>
                      <TableCell sx={{ whiteSpace: "nowrap" }}>
                        {" "}
                        {row.updated_by !== null
                          ? row.updated_by.name
                          : "-------"}
                      </TableCell>*/}

                        <TableCell align="center">
                          {row?.status === "Complete" ? (
                            <Chip
                              label="Completed"
                              variant="outlined"
                              // color="success"
                              size="small"
                              sx={{
                                minWidth: "75px",
                                textAlign: "center",
                                border: "none",
                                fontSize: "16px",
                                color: "#B278DB",
                              }}
                            />
                          ) : row?.status === "Publish" ? (
                            <Chip
                              label="Active"
                              variant="outlined"
                              // color="info"
                              size="small"
                              sx={{
                                minWidth: "75px",
                                textAlign: "center",
                                border: "none",
                                fontSize: "16px",
                                color: "#85D000",
                              }}
                            />
                          ) : row?.status === "Active" ? (
                            <Chip
                              label="In Review"
                              variant="outlined"
                              // color="warning"
                              size="small"
                              sx={{
                                minWidth: "75px",
                                textAlign: "center",
                                border: "none",
                                fontSize: "16px",
                                color: "#FFC300",
                              }}
                            />
                          ) : row?.status === "Pending" ? (
                            <Chip
                              label="Pending for payment"
                              variant="outlined"
                              color="info"
                              size="small"
                              sx={{
                                minWidth: "75px",
                                textAlign: "center",
                                border: "none",
                                fontSize: "16px",
                              }}
                            />
                          ) : (
                            <Chip
                              label={row?.status}
                              variant="outlined"
                              color="text"
                              size="small"
                              sx={{
                                minWidth: "75px",
                                textAlign: "center",
                                border: "none",
                                fontSize: "16px",
                              }}
                            />
                          )}
                        </TableCell>

                        <TableCell sx={{ whiteSpace: "nowrap" }} align="right">
                          <Button
                            variant="outlined"
                            color="text"
                            size="small"
                            startIcon={
                              <VisibilityOutlinedIcon
                                style={{ position: "relative", top: 0 }}
                              />
                            }
                            onClick={() => handleDetailClickOpen(row)}
                          >
                            Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}

                  {loading && pageLoading()}
                </TableBody>
              </Table>
            </TableContainer>
            {!loading && list?.length < 1 ? (
              <Box sx={{ textAlign: "center", p: 2 }}>
                <strong> No Data Found</strong>
              </Box>
            ) : null}
            {list?.length > 0 && (
              <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={totalData}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            )}
          </Paper>
        </div>

        <DetailDialog
          openDetailDialog={openDetailDialog}
          setOpenDetailDialog={setOpenDetailDialog}
          handleDetailClickOpen={handleDetailClickOpen}
          handleDetailClose={handleDetailClose}
          detailData={detailData}
        />
      </Container>
    </div>
  );
};

export default OrderList;
