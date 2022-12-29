import { Input, Table } from "reactstrap";
import React, { useEffect, useState, useMemo } from "react";
import PaginationComp from "./PaginationComp";

const userData = [
  { name: "Jeevan" },
  { name: "Manish" },
  { name: "Prince" },
  { name: "ali" },
  { name: "javed" },
  { name: "afzal" },
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "7" },
  { name: "8" },
  { name: "9" },
];
const TableData = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const posts = users.slice(indexOfFirstPost, indexOfLastPost);
    return posts;
  }, [users, currentPage]);
  console.log("currentPosts", currentPosts, users);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    // console.log(e.target.name, e.target.checked, users);
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        let currentPostFound = currentPosts.find(
          (post) => post.name == user.name
        );
        if (currentPostFound) return { ...user, isChecked: checked };
        // else if (user.isChecked) return { ...user, isChecked: checked };
        return { ...user };
      });

      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  // Get current posts

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  // const currentPosts = useMemo(() => {
  //   const indexOfLastPost = currentPage * postsPerPage;
  //   const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //   const posts = users.slice(indexOfFirstPost, indexOfLastPost);
  //   return posts;
  // }, [users, currentPage]);
  // console.log("currentPosts", currentPosts);

  // // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                name="allSelect"
                checked={!currentPosts.some((user) => user?.isChecked !== true)}
                onChange={handleChange}
              />
            </th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((user) => (
            <tr>
              <th scope="row">
                <input
                  type="checkbox"
                  name={user.name}
                  checked={user?.isChecked || false}
                  onChange={handleChange}
                />
              </th>
              <td>{user.name}</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationComp postsPerPage paginate={paginate} />
    </>
  );
};

export default TableData;
