import React, { useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as S from "./style";
import { usePeopleFetch } from "hooks";
import { useDispatch } from "react-redux";
import { getNat } from "redux/features/Slice";

const CheckBox = ({ isChecked, onChange, label, value }) => {
  const { users } = usePeopleFetch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNat({ natData: "" }));
  }, [value]);

  const handleChange = () => {
    // check if the value of the checkbox is equal to nat in users, if true set the nat in the redux
    users.map((userNat) => {
      if (value === userNat.nat) {
        dispatch(
          getNat({
            natData: value,
          })
        );
      } else {
        console.log("nat not found");
      }
    });
  };

  return (
    <S.CheckBox>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={() => handleChange(value)}
            color="primary"
          />
        }
        label={label}
      />
    </S.CheckBox>
  );
};

export default CheckBox;
