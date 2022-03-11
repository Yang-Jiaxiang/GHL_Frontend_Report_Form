import React, { useState, useEffect } from "react";
import {
    Checkbox,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextareaAutosize,
    IconButton,
} from "@mui/material";
import { red, green, blue } from "@mui/material/colors";
import ClearIcon from "@mui/icons-material/Clear";

const Liver = () => {
    const [normal, setNormal] = useState(true); //正常
    const [FLD, setFLD] = useState(false); //脂肪肝
    const [FLDLevel, setFLDLevel] = useState(""); //脂肪肝等級 1輕度 2中度 3重度

    function FLDLevelhandleClick(event) {
        if (event.target.FLDLevel === FLDLevel) {
            setFLDLevel("");
        } else {
            setFLDLevel(event.target.FLDLevel);
        }
        if (FLDLevel) {
            setFLD(false);
        } else {
            setFLD(true);
        }
    }

    return (
        <>
            <table class="tg" border="1">
                <thead>
                    <tr>
                        <td class="tg-0pky" rowspan="9">
                            <Checkbox
                                checked={normal}
                                onChange={(event) => {
                                    setNormal(event.target.checked);
                                }}
                            />
                            正常
                        </td>
                        <td class="tg-0pky" colspan="2">
                            <Checkbox
                                checked={FLD}
                                onChange={(event) => {
                                    setFLD(event.target.checked);
                                }}
                            />
                            脂肪肝
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={FLDLevel}
                                >
                                    <FormControlLabel
                                        value="1"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: green[800],
                                                    "&.Mui-checked": {
                                                        color: green[600],
                                                    },
                                                }}
                                                onClick={FLDLevelhandleClick}
                                            />
                                        }
                                        label="輕度"
                                        onChange={(event) => {
                                            setFLDLevel(event.target.value);
                                        }}
                                    />
                                    <FormControlLabel
                                        value="2"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: blue[800],
                                                    "&.Mui-checked": {
                                                        color: blue[600],
                                                    },
                                                }}
                                                onClick={FLDLevelhandleClick}
                                            />
                                        }
                                        label="中度"
                                        onChange={(event) => {
                                            setFLDLevel(event.target.value);
                                        }}
                                    />
                                    <FormControlLabel
                                        value="3"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: red[700],
                                                    "&.Mui-checked": {
                                                        color: red[700],
                                                    },
                                                }}
                                                onClick={FLDLevelhandleClick}
                                            />
                                        }
                                        label="重度"
                                        onChange={(event) => {
                                            setFLDLevel(event.target.value);
                                        }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                        <td class="tg-0lax" rowspan="4">
                            <p>其他：</p>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={7}
                                placeholder="Minimum 3 rows"
                                style={{ width: 200 }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0pky" colspan="2">
                            <Checkbox />
                            疑似肝實質病變
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0pky" colspan="2">
                            <Checkbox />
                            肝實質病變
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0pky" colspan="2">
                            <Checkbox />
                            肝硬化
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">
                            <Checkbox />
                            肝囊腫
                        </td>
                        <td class="tg-0pky" colspan="2">
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="左葉"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: green[800],
                                                    "&.Mui-checked": {
                                                        color: green[600],
                                                    },
                                                }}
                                            />
                                        }
                                        label="左葉"
                                    />
                                    <FormControlLabel
                                        value="右葉"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: blue[800],
                                                    "&.Mui-checked": {
                                                        color: blue[800],
                                                    },
                                                }}
                                            />
                                        }
                                        label="右葉"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">
                            <Checkbox />
                            血管瘤
                        </td>
                        <td class="tg-0pky" colspan="2">
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="左葉"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: green[800],
                                                    "&.Mui-checked": {
                                                        color: green[600],
                                                    },
                                                }}
                                            />
                                        }
                                        label="左葉"
                                    />
                                    <FormControlLabel
                                        value="右葉"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: blue[800],
                                                    "&.Mui-checked": {
                                                        color: blue[800],
                                                    },
                                                }}
                                            />
                                        }
                                        label="右葉"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">
                            <Checkbox />
                            肝內鈣化點
                        </td>
                        <td class="tg-0pky" colspan="2">
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="左葉"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: green[800],
                                                    "&.Mui-checked": {
                                                        color: green[600],
                                                    },
                                                }}
                                            />
                                        }
                                        label="左葉"
                                    />
                                    <FormControlLabel
                                        value="右葉"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: blue[800],
                                                    "&.Mui-checked": {
                                                        color: blue[800],
                                                    },
                                                }}
                                            />
                                        }
                                        label="右葉"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">
                            <Checkbox />
                            肝腫瘤(疑似肝癌)
                        </td>
                        <td class="tg-0pky" colspan="2">
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="左葉"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: green[800],
                                                    "&.Mui-checked": {
                                                        color: green[600],
                                                    },
                                                }}
                                            />
                                        }
                                        label="左葉"
                                    />
                                    <FormControlLabel
                                        value="右葉"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: blue[800],
                                                    "&.Mui-checked": {
                                                        color: blue[800],
                                                    },
                                                }}
                                            />
                                        }
                                        label="右葉"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">
                            <Checkbox />
                            肝腫瘤(性質不明)
                        </td>
                        <td class="tg-0pky">
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="左葉"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: green[800],
                                                    "&.Mui-checked": {
                                                        color: green[600],
                                                    },
                                                }}
                                            />
                                        }
                                        label="左葉"
                                    />
                                    <FormControlLabel
                                        value="右葉"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: blue[800],
                                                    "&.Mui-checked": {
                                                        color: blue[800],
                                                    },
                                                }}
                                            />
                                        }
                                        label="右葉"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                        <td class="tg-0pky"></td>
                    </tr>
                </thead>
            </table>
        </>
    );
};
export default Liver;
