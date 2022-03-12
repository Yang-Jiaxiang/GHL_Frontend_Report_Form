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
    TextField,
    Button,
} from "@mui/material";

const Suggestion = (props) => {
    const setSuggestionForm = props.setSuggestionForm;
    const suggestionFormJson = props.suggestionForm;
    const [check, setCheck] = useState(false);
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [goToHospital, setGotoHospital] = useState(false);
    const [HBV, setHBV] = useState(false);
    const [HCV, setHCV] = useState(false);
    const [remark, setRemark] = useState(""); //其他
    useEffect(() => {
        if (suggestionFormJson.Remark === undefined) {
            setRemark("");
        } else {
            setRemark(suggestionFormJson.Remark);
        }
        if (suggestionFormJson.Year === undefined) {
            setYear("");
        } else {
            setCheck(true);
            setYear(suggestionFormJson.Year);
        }

        if (suggestionFormJson.Month === undefined) {
            setMonth("");
        } else {
            setCheck(true);
            setMonth(suggestionFormJson.Month);
        }

        if (suggestionFormJson.GoToHospital != undefined) {
            setGotoHospital(true);
        }
        if (suggestionFormJson.HBV != undefined) {
            setHBV(suggestionFormJson.HBV);
        }
        if (suggestionFormJson.HCV != undefined) {
            setHCV(suggestionFormJson.HCV);
        }
    }, []);

    return (
        <Box>
            <table  width="100%">
                <tbody>
                    <tr>
                        <td rowSpan={3} width="10%">建議</td>
                        <td>
                            <Checkbox
                                checked={check}
                                onChange={(event) => {
                                    setCheck(event.target.checked);
                                }}
                                onClick={() => {
                                    setYear("");
                                    setMonth("");
                                    setCheck(false);
                                    suggestionFormJson.Year = "";
                                    suggestionFormJson.Month = "";
                                    setSuggestionForm(
                                        delNullProperty(
                                            delNullProperty(suggestionFormJson)
                                        )
                                    );
                                }}
                            />
                            請每隔
                            <input
                                type="text"
                                id="fname"
                                name="fname"
                                size="1"
                                value={year}
                                onChange={(event) => {
                                    setCheck(true);
                                    setYear(event.target.value);
                                    suggestionFormJson.Year =
                                        event.target.value;
                                    setSuggestionForm(
                                        delNullProperty(suggestionFormJson)
                                    );
                                }}
                            />
                            年
                            <input
                                type="text"
                                id="fname"
                                name="fname"
                                size="1"
                                value={month}
                                onChange={(event) => {
                                    setCheck(true);
                                    setMonth(event.target.value);
                                    suggestionFormJson.Month =
                                        event.target.value;
                                    setSuggestionForm(
                                        delNullProperty(suggestionFormJson)
                                    );
                                }}
                            />
                            月定期追蹤檢查一次
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox
                                checked={goToHospital}
                                onChange={(event) => {
                                    setGotoHospital(event.target.checked);
                                    if (event.target.checked) {
                                        suggestionFormJson.GoToHospital = true;
                                    } else {
                                        suggestionFormJson.GoToHospital = "";
                                    }
                                    setSuggestionForm(
                                        delNullProperty(suggestionFormJson)
                                    );
                                }}
                            />
                            請至各大醫院進一步詳細檢查
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox
                                checked={HBV}
                                onChange={(event) => {
                                    setHBV(event.target.checked);
                                    if (event.target.checked) {
                                        suggestionFormJson.HBV = true;
                                    } else {
                                        suggestionFormJson.HBV = "";
                                    }
                                    setSuggestionForm(
                                        delNullProperty(suggestionFormJson)
                                    );
                                }}
                            />
                            HBV
                            <Checkbox
                                checked={HCV}
                                onChange={(event) => {
                                    setHCV(event.target.checked);
                                    if (event.target.checked) {
                                        suggestionFormJson.HCV = true;
                                    } else {
                                        suggestionFormJson.HCV = "";
                                    }
                                    setSuggestionForm(
                                        delNullProperty(suggestionFormJson)
                                    );
                                }}
                            />
                            HCV
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={7}
                                placeholder="其他："
                                style={{ width: "95%" }}
                                value={remark}
                                onChange={(event) => {
                                    setRemark(event.target.value);
                                    suggestionFormJson.Remark =
                                        event.target.value;
                                    setSuggestionForm(
                                        delNullProperty(suggestionFormJson)
                                    );
                                }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    );
};
export default Suggestion;
