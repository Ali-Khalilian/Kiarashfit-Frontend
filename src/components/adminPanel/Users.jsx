import React from "react";
import { BiEdit, BiSolidTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import NoData from "../noData/NoData";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Users = ({ users,setUsers }) => {
  const axiosPrivate = useAxiosPrivate();

  const deleteUser = (id) => {
    axiosPrivate
      .delete(`/users/delete`, {
        data: {
          id: id,
        },
      })
      .then((res) => {
        res.status === 200
          ? setUsers(res.data.updatedUsers)
          : res.status === 204
          ? setUsers([])
          : console.log(res);
      })
      .catch((err) => console.log(err));
  };



  return (
    <div className="wh100">
       <Link className="btn btn-success mb-5" to="/register">
        افزودن
      </Link>
      {users.length ? (
        users.map((user, index) => (
          <div key={Math.random()} className="w-75 mb-3">
            <div className="text-dark fs-4 bg-light p-3 w-100 d-flex justify-content-between align-items-center">
              <div className="">
                {`${index + 1}. ${user.firstname} ${user.lastname}`}
              </div>

             

                <div className="d-flex">
                <Link onClick={() => {deleteUser(user._id)}}>
                  <BiSolidTrashAlt className="text-danger fs-2" />
                </Link>
                <div className="mx-2"></div>
                <Link to={`/register/${user._id}`}>
                  <BiEdit className="text-warning fs-2" />
                </Link>
                </div>
             
            </div>
          </div>
        ))
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Users;
