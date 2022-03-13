import React, { useState, useEffect } from "react";
import delNullProperty from "./delNullProperty";
import {
    Checkbox,
    FormControl,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextareaAutosize,
    Box,
    Button,
} from "@mui/material";
import { red, green, blue } from "@mui/material/colors";

const Kidney = (props) => {
    const kidneyFormJSON = props.kidneyForm;
    const setKidneyForm = props.setKidneyForm;
    const [normal, setNormal] = useState(true);
    const [remark, setRemark] = useState(""); //其他
    const [kidneyStones, setKidneyStones] = useState(false); //腎結石BANG
    const [kidneyStonesLeftorRight, setKidneyStonesLeftorRight] = useState(""); //腎結石左或右
    const [renalCyst, setRenalCyst] = useState(false); //腎囊腫
    const [renalCystLeftorRight, setRenalCystLeftorRight] = useState(""); //腎囊腫左或右
    const [kidneyCancer, setKidneyCancer] = useState(false); //腎腫瘤
    const [kidneyCancerLeftorRight, setKidneyCancerLeftorRight] =
        useState(false); //腎腫瘤左或右

    useEffect(() => {
        setNormal(kidneyFormJSON.normal);
        //其他
        if (kidneyFormJSON.Remark === undefined) {
            setRemark("");
        } else {
            setRemark(kidneyFormJSON.Remark);
        }
        //腎結石
        if (kidneyFormJSON.KidneyStones === undefined) {
            setKidneyStonesLeftorRight("");
        } else {
            setKidneyStones(true);
            setKidneyStonesLeftorRight(kidneyFormJSON.KidneyStones);
        }
        //腎囊腫
        if (kidneyFormJSON.RenalCyst === undefined) {
            setRenalCystLeftorRight("");
        } else {
            setRenalCyst(true);
            setRenalCystLeftorRight(kidneyFormJSON.RenalCyst);
        }
        //腎腫瘤
        if (kidneyFormJSON.KidneyCancer === undefined) {
            setKidneyCancerLeftorRight("");
        } else {
            setKidneyCancer(true);
            setKidneyCancerLeftorRight(kidneyFormJSON.KidneyCancer);
        }
    }, []);

    //腎結石
    function KidneyStoneshandleClick(event) {
        if (event.target.value === kidneyStonesLeftorRight) {
            setKidneyStonesLeftorRight("");
            setKidneyStones(false);
            kidneyFormJSON.KidneyStones = "";
        } else {
            setKidneyStonesLeftorRight(event.target.value);
            setKidneyStones(true);
            kidneyFormJSON.KidneyStones = event.target.value;
        }
        setKidneyForm(delNullProperty(kidneyFormJSON));
    }
    //腎囊腫
    function RenalCysthandleClick(event) {
        if (event.target.value === renalCystLeftorRight) {
            setRenalCystLeftorRight("");
            setRenalCyst(false);
            kidneyFormJSON.KidneyStones = "";
        } else {
            setRenalCystLeftorRight(event.target.value);
            setRenalCyst(true);
            kidneyFormJSON.RenalCyst = event.target.value;
        }
        setKidneyForm(delNullProperty(kidneyFormJSON));
    }
    //腎腫瘤
    function KidneyCancerhandleClick(event) {
        if (event.target.value === kidneyCancerLeftorRight) {
            setKidneyCancerLeftorRight("");
            setKidneyCancer(false);
            kidneyFormJSON.KidneyCancer = "";
        } else {
            setKidneyCancerLeftorRight(event.target.value);
            setKidneyCancer(true);
            kidneyFormJSON.KidneyCancer = event.target.value;
        }
        setKidneyForm(delNullProperty(kidneyFormJSON));
    }

    return (
        <Box>
            <table width="100%">
                <tr>
                    <td rowSpan={4} width="10%">
                        腎臟
                    </td>
                    <td rowSpan={4} width="10%">
                        <Checkbox
                            checked={normal}
                            onChange={(event) => {
                                setNormal(event.target.checked);
                                if (event.target.checked) {
                                    kidneyFormJSON.normal = true;
                                } else {
                                    kidneyFormJSON.normal = false;
                                }
                                setKidneyForm(kidneyFormJSON);
                            }}
                        />
                        正常
                    </td>
                    <td>
                        <Checkbox
                            checked={kidneyStones}
                            onChange={(event) => {
                                setKidneyStones(event.target.checked);
                            }}
                            onClick={() => {
                                setKidneyStonesLeftorRight("");
                                setKidneyStones(false);
                                kidneyFormJSON.KidneyStones = "";
                                setKidneyForm(delNullProperty(kidneyFormJSON));
                            }}
                        />
                        腎結石：
                        <FormControl style={{ paddingLeft: 10 }}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={kidneyStonesLeftorRight}
                            >
                                <FormControlLabel
                                    value="單一"
                                    control={
                                        <Radio
                                            sx={{
                                                color: green[800],
                                                "&.Mui-checked": {
                                                    color: green[600],
                                                },
                                            }}
                                            onClick={KidneyStoneshandleClick}
                                        />
                                    }
                                    label="單一"
                                    onChange={(event) => {
                                        setKidneyStonesLeftorRight(
                                            event.target.value
                                        );
                                    }}
                                />
                                <FormControlLabel
                                    value="多發"
                                    control={
                                        <Radio
                                            sx={{
                                                color: blue[800],
                                                "&.Mui-checked": {
                                                    color: blue[800],
                                                },
                                            }}
                                            onClick={KidneyStoneshandleClick}
                                        />
                                    }
                                    label="多發"
                                    onChange={(event) => {
                                        setKidneyStonesLeftorRight(
                                            event.target.value
                                        );
                                    }}
                                />
                            </RadioGroup>
                        </FormControl>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Checkbox
                            checked={renalCyst}
                            onChange={(event) => {
                                setRenalCyst(event.target.checked);
                            }}
                            onClick={() => {
                                setRenalCystLeftorRight("");
                                setRenalCyst(false);
                                kidneyFormJSON.RenalCyst = "";
                                setKidneyForm(delNullProperty(kidneyFormJSON));
                            }}
                        />
                        腎囊腫：
                        <FormControl style={{ paddingLeft: 10 }}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={renalCystLeftorRight}
                            >
                                <FormControlLabel
                                    value="單一"
                                    control={
                                        <Radio
                                            sx={{
                                                color: green[800],
                                                "&.Mui-checked": {
                                                    color: green[600],
                                                },
                                            }}
                                            onClick={RenalCysthandleClick}
                                        />
                                    }
                                    label="單一"
                                    onChange={(event) => {
                                        setRenalCystLeftorRight(
                                            event.target.value
                                        );
                                    }}
                                />
                                <FormControlLabel
                                    value="多發"
                                    control={
                                        <Radio
                                            sx={{
                                                color: blue[800],
                                                "&.Mui-checked": {
                                                    color: blue[800],
                                                },
                                            }}
                                            onClick={RenalCysthandleClick}
                                        />
                                    }
                                    label="多發"
                                    onChange={(event) => {
                                        setRenalCystLeftorRight(
                                            event.target.value
                                        );
                                    }}
                                />
                            </RadioGroup>
                        </FormControl>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Checkbox
                            checked={kidneyCancer}
                            onChange={(event) => {
                                setKidneyCancer(event.target.checked);
                            }}
                            h
                            onClick={() => {
                                setKidneyCancerLeftorRight("");
                                setKidneyCancer(false);
                                kidneyFormJSON.KidneyCancer = "";
                                setKidneyForm(delNullProperty(kidneyFormJSON));
                            }}
                        />
                        腎腫瘤：
                        <FormControl style={{ paddingLeft: 10 }}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={kidneyCancerLeftorRight}
                            >
                                <FormControlLabel
                                    value="單一"
                                    control={
                                        <Radio
                                            sx={{
                                                color: green[800],
                                                "&.Mui-checked": {
                                                    color: green[600],
                                                },
                                            }}
                                            onClick={KidneyCancerhandleClick}
                                        />
                                    }
                                    label="單一"
                                    onChange={(event) => {
                                        setKidneyCancerLeftorRight(
                                            event.target.value
                                        );
                                    }}
                                />
                                <FormControlLabel
                                    value="多發"
                                    control={
                                        <Radio
                                            sx={{
                                                color: blue[800],
                                                "&.Mui-checked": {
                                                    color: blue[800],
                                                },
                                            }}
                                            onClick={KidneyCancerhandleClick}
                                        />
                                    }
                                    label="多發"
                                    onChange={(event) => {
                                        setKidneyCancerLeftorRight(
                                            event.target.value
                                        );
                                    }}
                                />
                            </RadioGroup>
                        </FormControl>
                    </td>
                </tr>

                <tr>
                    <td>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={7}
                            placeholder="其他："
                            style={{ width: "95%" }}
                            value={remark}
                            onChange={(event) => {
                                setRemark(event.target.value);
                                kidneyFormJSON.Remark = event.target.value;
                                setKidneyForm(delNullProperty(kidneyFormJSON));
                            }}
                        />
                    </td>
                </tr>
            </table>
        </Box>
    );
};

export default Kidney;
