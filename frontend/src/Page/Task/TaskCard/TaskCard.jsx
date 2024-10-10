import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { UserListModel } from "./UserListModel";

const role = "ROLE_ADMIN";

const techStack = ["Angular", "React", "Java"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TaskCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openUserList, setOpenUserList] = useState(false);

  const handleCloseUserList = () => {
    setOpenUserList(false);
  };
  const handleOpenUserList = () => {
    setOpenUserList(true);
    handleMenuClose();
  };
  const handleOpenSubmissionList = () => {};
  const handleOpenUpdateTaskModel = () => {};
  const handleDeleteTask = () => {};
  return (
    <div>
      <div className="card lg:flex justify-between">
        <div className="lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]">
          <div className="">
            <img
              className="lg:w-[7rem] lg:h-[7rem] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAAUO4kHlfIVFjl-o0AjDyaUnbBmab4hqNR5cz6ZR1w9WWxElvqwgrcbYV2sZbOL9Miw&usqp=CAU"
            />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="font-bold text-lg ">Car Rental Website</h1>
              <p className="text-gray-500 text-sm">
                Use latest Technologies and Frameworks
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {/* {item.tags.map((item) => (
                <span className="py-1 px-5 rounded-full techStack"></span>
              ))} */}
              {[1, 1, 1, 1].map((item) => (
                <span className="py-1 px-5 rounded-full techStack">
                  Angular
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <IconButton
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {" "}
            {role === "ROLE_ADMIN" ? (
              <>
                <MenuItem onClick={handleOpenUserList}>Assined User</MenuItem>
                <MenuItem onClick={handleOpenSubmissionList}>
                  See Submissions
                </MenuItem>
                <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
              </>
            ) : (
              <>
                {/* <MenuItem onClick={handleOpenSubmitForm}>SUBMIT</MenuItem> */}
              </>
            )}
          </Menu>
        </div>
      </div>
      <UserListModel
        // taskId={taskId}
        open={openUserList}
        handleClose={handleCloseUserList}
      />
    </div>
  );
};

export default TaskCard;
