import React, { useState, useEffect } from "react";
import { Box, Checkbox, TextareaAutosize } from "@mui/material";
import delNullProperty from "./delNullProperty";

const Pancreas = (props) => {
    const setPancreasForm = props.setPancreasForm;
    const pancreasFormJson = props.pancreasForm;

    const [remark, setRemark] = useState(""); //其他
    useEffect(() => {
        if (pancreasFormJson.Remark === undefined) {
            setRemark("");
        } else {
            setRemark(pancreasFormJson.Remark);
        }
    }, []);

    return (
        <Box>
            <table  width="100%">
                <tr>
                    <td width="10%">胰臟</td>
                    <td width="10%">
                        <Checkbox />
                        正常
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
                                pancreasFormJson.Remark = event.target.value;
                                setPancreasForm(delNullProperty(pancreasFormJson));
                            }}
                        />
                    </td>
                </tr>
            </table>
        </Box>
    );
};

export default Pancreas;
