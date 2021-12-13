import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import { useSelector } from "react-redux";
import { selectNat } from "redux/features/Slice";

const UserList = ({ users, isLoading }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [filteredCountries, setfilteredCountries] = useState([]);
  const [click, setclick] = useState(false);
  const [show, setShow] = useState(false);
  const [cnt, setCnt] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );
  const [favoriteMessage, setFavoriteMessage] = useState("");
  const userNat = useSelector(selectNat);
  const getitem = localStorage.getItem("nat");

  const countrys = Array.from(new Set(users.map((userCountry) => userCountry?.nat)));
  const usersFavorite = favorites.map((name) => name.login.uuid);

  useEffect(() => {
    filterByCountry(users, userNat.natData);
  }, [getitem]);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(favorites));
  }, [favorites]);

  let a = "l";

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const handleFavorite = (user) => {
    setShow(true);
    //when the user click again it'll check if the user is exist in favorites, if yes it'll delete him
    if (usersFavorite.includes(user.login.uuid)) {
      const newList = favorites.filter(
        (deletedUser) => deletedUser.login.uuid !== user.login.uuid
      );
      setFavorites(newList);
      setFavoriteMessage("The user has been removed from the favorites list!");
    } else {
      // save user to localstorage
      setFavorites((prevState) => prevState.concat(user));
      setFavoriteMessage("The user has been added to the favorites list!");
      localStorage.setItem("fav", JSON.stringify(favorites));
    }
  };

  const filterByCountry = (data, country) => {
    setCnt(true);
    if (countrys.indexOf(country) !== -1) {
      let filteredData = data.filter((usr) => usr.nat === country);
      setfilteredCountries((prevState) => prevState.concat(filteredData));
    } else {
    }
  };

  return (
    <S.UserList>
      <S.Filters>
        {/* Bonus task, dynamic checkbox's */}
        {countrys.map((country, index) => {
          return <CheckBox key={index} value={country} label={country} />;
        })}
      </S.Filters>
      <S.FavoriteMessage>
        {/* Favorites popup message */}
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body>{favoriteMessage}</Toast.Body>
        </Toast>
      </S.FavoriteMessage>
      <S.List>
        {/* show all users when checkbox's is unchecked */}
        {a === "l"
          ? users.map((user, index) => {
              return (
                <S.User
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <S.UserPicture src={user?.picture.large} alt="" />
                  <S.UserInfo>
                    <Text size="22px" bold>
                      {user?.name.title} {user?.name.first} {user?.name.last}
                    </Text>
                    <Text size="14px">{user?.email}</Text>
                    <Text size="14px">
                      {user?.location.street.number} {user?.location.street.name}
                    </Text>
                    <Text size="14px">
                      {user?.location.city} {user?.location.country}
                    </Text>
                  </S.UserInfo>
                  <S.IconButtonWrapper
                    isVisible={
                      index === hoveredUserId || usersFavorite.includes(user.login.uuid)
                    }
                    isClicked={click}
                  >
                    <IconButton onClick={() => handleFavorite(user)}>
                      <FavoriteIcon color="error" />
                    </IconButton>
                  </S.IconButtonWrapper>
                </S.User>
              );
            })
          : filteredCountries.map((user, index) => {
              return (
                <S.User
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {user.nat}
                  <S.UserPicture src={user?.picture.large} alt="" />
                  <S.UserInfo>
                    <Text size="22px" bold>
                      {user?.name.title} {user?.name.first} {user?.name.last}
                    </Text>
                    <Text size="14px">{user?.email}</Text>
                    <Text size="14px">
                      {user?.location.street.number} {user?.location.street.name}
                    </Text>
                    <Text size="14px">
                      {user?.location.city} {user?.location.country}
                    </Text>
                  </S.UserInfo>
                  <S.IconButtonWrapper
                    isVisible={
                      index === hoveredUserId || usersFavorite.includes(user.login.uuid)
                    }
                  >
                    <IconButton onClick={() => handleFavorite(user)}>
                      <FavoriteIcon color="error" />
                    </IconButton>
                  </S.IconButtonWrapper>
                </S.User>
              );
            })}

        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
