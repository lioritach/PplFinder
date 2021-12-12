import React, { useEffect, useState } from "react";
import Text from "components/Text";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const Favorites = () => {
  const [local, setLocal] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );
  const usersFavorite = favorites.map((name) => name.login.uuid);

  useEffect(() => {
    saved();
  }, []);

  const saved = () => {
    setLocal((prevState) => prevState.concat(JSON.parse(localStorage.getItem("fav"))));
  };

  console.log(favorites);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (user) => {
    //when the user click again it'll check if the user is exist in favorites, if yes it'll delete him
    if (usersFavorite.includes(user.login.uuid)) {
      const newList = favorites.filter(
        (deletedUser) => deletedUser.login.uuid !== user.login.uuid
      );
      setFavorites(newList);
    } else {
      setFavorites((prevState) => prevState.concat(user));
      localStorage.setItem("fav", JSON.stringify(favorites));
    }
  };

  return (
    <S.UserList>
      <S.List>
        <Text>Favorites</Text>
        {local.length === 0 ? <Text>אין עדין משתמשים מועדפים</Text> : null}
        {local.map((user, index) => {
          return (
            <S.User key={index}>
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
              <S.IconButtonWrapper isVisible={usersFavorite.includes(user.login.uuid)}>
                <IconButton onClick={() => handleFavorite(user)}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
      </S.List>
    </S.UserList>
  );
};

export default Favorites;
