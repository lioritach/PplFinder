import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectNat } from "redux/features/Slice";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const nat = useSelector(selectNat);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=100&page=1`);
    setIsLoading(false);
    setUsers(response.data.results);
    return;
  }

  return { users, isLoading, filteredUsers, fetchUsers };
};
