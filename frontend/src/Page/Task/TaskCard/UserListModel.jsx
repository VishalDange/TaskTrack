import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar, Divider, ListItemText } from "@mui/material";

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

const users = [1, 1, 1, 1, 1];

export const UserListModel = ({ open, handleClose, taskId }) => {
  // const dispatch=useDispatch();
  // const { auth } = useSelector((store) => store);

  useEffect(() => {
    // dispatch(getUserList(localStorage.getItem("jwt")));
  }, []);

  const handleAssignTask = (userId) => {
    // dispatch(assignedTaskToUser({ userId, taskId }));
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {auth.users.map((item, i) => (
              <>
                <div
                  className="flex items-center justify-between w-full"
                  key={i}
                >
                  <div>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Cindy Baker"
                          src="https://cdn.leonardo.ai/users/f6c5ad77-7098-4040-bf46-6f9b62556804/generations/c60489f0-13ac-454d-8e17-2280222f205c/variations/alchemyrefiner_alchemymagic_1_c60489f0-13ac-454d-8e17-2280222f205c_0.jpg?w=512"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.fullName}
                        secondary={`@${item.fullName
                          .toLowerCase()
                          .split(" ")
                          .join("_")}`}
                      />
                    </ListItem>
                  </div>
                  <div>
                    <Button
                      onClick={() => handleAssignTask(item.id)}
                      className="customeButton"
                      variant="contained"
                      size="small"
                    >
                      select
                    </Button>
                  </div>
                </div>
                {i !== users.length - 1 && <Divider variant="inset" />}
              </>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};
