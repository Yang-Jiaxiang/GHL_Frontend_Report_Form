import React, { useState, useEffect } from "react";
import {
    Checkbox,
    FormControl,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextareaAutosize,
    Box,
} from "@mui/material";
import delNullProperty from "./delNullProperty";

const Spleen = (props) => {
    const setSpleenForm = props.setSpleenForm;
    const spleenFormJson = props.spleenForm;
    const [normal, setNormal] = useState(true);
    const [splenomegaly, setSplenomegaly] = useState(false); //脾臟腫大
    const [remark, setRemark] = useState(""); //其他
    useEffect(() => {
        setNormal(spleenFormJson.normal);
        if (spleenFormJson.Remark === undefined) {
            setRemark("");
        } else {
            setRemark(spleenFormJson.Remark);
        }
        if (spleenFormJson.Splenomegaly != undefined) {
            setSplenomegaly(true);
        }
    }, []);
    return (
        <Box>
            <table width="100%">
                <tr>
                    <td width="10%">脾臟</td>
                    <td width="10%">
                        <Checkbox
                            checked={normal}
                            onChange={(event) => {
                                setNormal(event.target.checked);
                                if (event.target.checked) {
                                    spleenFormJson.normal = true;
                                } else {
                                    spleenFormJson.normal = false;
                                }
                                setSpleenForm(spleenFormJson);
                            }}
                        />
                        正常
                    </td>
                    <td width="20%">
                        <Checkbox
                            checked={splenomegaly}
                            onChange={(event) => {
                                setSplenomegaly(event.target.checked);
                                if (event.target.checked) {
                                    spleenFormJson.Splenomegaly = true;
                                } else {
                                    spleenFormJson.Splenomegaly = "";
                                }
                                setSpleenForm(delNullProperty(spleenFormJson));
                            }}
                        />
                        脾臟腫大
                    </td>
                    <td>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={7}
                            placeholder="其他："
                            style={{ width: "95%" }}
                            value={remark}
                            onChange={(event) => {
                                setRemark(event.target.value);
                                spleenFormJson.Remark = event.target.value;
                                setSpleenForm(delNullProperty(spleenFormJson));
                            }}
                        />
                    </td>
                </tr>
            </table>
        </Box>
    );
};

export default Spleen;
