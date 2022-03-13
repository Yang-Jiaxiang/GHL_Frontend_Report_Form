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
import { red, green, blue } from "@mui/material/colors";
import SendIcon from "@mui/icons-material/Send";
import delNullProperty from "./delNullProperty";
import { Padding } from "@mui/icons-material";

const Liver = (props) => {
    const setLiverForm = props.setLiverForm;
    const LiverFormJson = props.liverForm;

    const [normal, setNormal] = useState(true); //正常
    const [FLD, setFLD] = useState(false); //脂肪肝
    const [FLDLevel, setFLDLevel] = useState(""); //脂肪肝等級 1輕度 2中度 3重度
    const [suspectedLiverLesions, setSuspectedLiverLesions] = useState(false); //疑似肝實質病變
    const [liverLesions, setLiverLesions] = useState(false); //肝實質病變
    const [liverCirrohsis, setLiverCirrohsis] = useState(false); //肝硬化
    const [liverHepaticCyst, setLiverHepaticCyst] = useState(false); //肝囊腫
    const [liverHepaticCystLeftorRight, setLiverHepaticCystLeftorRight] =
        useState(""); //肝囊腫左或右
    const [angiomas, setAngiomas] = useState(false); //血管瘤
    const [angiomasLeftorRight, setAngiomasLeftorRight] = useState(""); //血管瘤左或右

    const [intrahepaticCalcification, setIntrahepaticCalcification] =
        useState(false); //肝內鈣化點
    const [
        intrahepaticCalcificationLeftorRight,
        setIntrahepaticCalcificationLeftorRight,
    ] = useState(""); //肝內鈣化點左或右
    const [liverCancer, setLiverCancer] = useState(false); //肝腫瘤癌症
    const [liverCancerLeftorRight, setLiverCancerLeftorRight] = useState(""); //肝腫瘤癌症左或右
    const [liverCancerUnknown, setLiverCancerUnknown] = useState(false); //肝腫瘤不明
    const [liverCancerUnknownLeftorRight, setLiverCancerUnknownLeftorRight] =
        useState(""); //肝腫瘤不明左或右
    const [remark, setRemark] = useState(""); //其他

    useEffect(() => {
        //渲染資料
        //脂肪肝
        setNormal(LiverFormJson.normal);
        if (LiverFormJson.FLDLevel === undefined) {
            setFLDLevel("");
        } else {
            setFLD(true);
            setFLDLevel(LiverFormJson.FLDLevel);
        }
        //疑似肝實質病變
        if (LiverFormJson.SuspectedLiverLesions !== undefined) {
            setSuspectedLiverLesions(true);
        }
        //肝實質病變
        if (LiverFormJson.LiverLesions !== undefined) {
            setLiverLesions(true);
        }
        //肝硬化
        if (LiverFormJson.LiverCirrohsis !== undefined) {
            setLiverCirrohsis(true);
        }
        //肝囊腫
        if (LiverFormJson.LiverHepaticCystLeftorRight === undefined) {
            setLiverHepaticCystLeftorRight("");
        } else {
            setLiverHepaticCyst(true);
            setLiverHepaticCystLeftorRight(
                LiverFormJson.LiverHepaticCystLeftorRight
            );
        }
        //血管瘤
        if (LiverFormJson.AngiomasLeftorRight === undefined) {
            setAngiomasLeftorRight("");
        } else {
            setAngiomas(true);
            setAngiomasLeftorRight(LiverFormJson.AngiomasLeftorRight);
        }
        //肝內鈣化點
        if (LiverFormJson.IntrahepaticCalcificationLeftorRight === undefined) {
            setIntrahepaticCalcificationLeftorRight("");
        } else {
            setIntrahepaticCalcification(true);
            setIntrahepaticCalcificationLeftorRight(
                LiverFormJson.IntrahepaticCalcificationLeftorRight
            );
        }
        //肝腫瘤(疑似肝癌)
        if (LiverFormJson.LiverCancerLeftorRight === undefined) {
            setLiverCancerLeftorRight("");
        } else {
            setLiverCancer(true);
            setLiverCancerLeftorRight(LiverFormJson.LiverCancerLeftorRight);
        }
        //肝腫瘤(性質不明)
        if (LiverFormJson.LiverCancerUnknownLeftorRight === undefined) {
            setLiverCancerUnknownLeftorRight("");
        } else {
            setLiverCancerUnknown(true);
            setLiverCancerUnknownLeftorRight(
                LiverFormJson.LiverCancerUnknownLeftorRight
            );
        }
        if (LiverFormJson.Remark === undefined) {
            setRemark("");
        } else {
            setRemark(LiverFormJson.Remark);
        }
    }, []);

    //脂肪肝前方Checkbox辨識
    function FLDLevelhandleClick(event) {
        if (event.target.value === FLDLevel) {
            setFLDLevel("");
            setFLD(false);
            LiverFormJson.FLDLevel = "";
        } else {
            setFLDLevel(event.target.value);
            setFLD(true);
            LiverFormJson.FLDLevel = event.target.value;
        }

        setLiverForm(delNullProperty(LiverFormJson));
    }
    //肝囊腫前方Checkbox辨識
    function liverHepaticCysthandleClick(event) {
        if (event.target.value === liverHepaticCystLeftorRight) {
            setLiverHepaticCystLeftorRight("");
            setLiverHepaticCyst(false);
            LiverFormJson.LiverHepaticCystLeftorRight = "";
        } else {
            setLiverHepaticCystLeftorRight(event.target.value);
            setLiverHepaticCyst(true);
            LiverFormJson.LiverHepaticCystLeftorRight = event.target.value;
        }
        setLiverForm(delNullProperty(LiverFormJson));
    }

    //血管瘤前方Checkbox辨識
    function angiomashandleClick(event) {
        if (event.target.value === angiomasLeftorRight) {
            setAngiomasLeftorRight("");
            setAngiomas(false);
            LiverFormJson.AngiomasLeftorRight = "";
        } else {
            setAngiomasLeftorRight(event.target.value);
            setAngiomas(true);
            LiverFormJson.AngiomasLeftorRight = event.target.value;
        }
        setLiverForm(delNullProperty(LiverFormJson));
    }

    //肝內鈣化點前方Checkbox辨識
    function intrahepaticCalcificationhandleClick(event) {
        if (event.target.value === intrahepaticCalcificationLeftorRight) {
            setIntrahepaticCalcificationLeftorRight("");
            setIntrahepaticCalcification(false);
            LiverFormJson.IntrahepaticCalcificationLeftorRight = "";
        } else {
            setIntrahepaticCalcificationLeftorRight(event.target.value);
            setIntrahepaticCalcification(true);
            LiverFormJson.IntrahepaticCalcificationLeftorRight =
                event.target.value;
        }
        setLiverForm(delNullProperty(LiverFormJson));
    }

    //肝腫瘤癌症前方Checkbox辨識
    function liverCancerLeftorRighthandleClick(event) {
        if (event.target.value === liverCancerLeftorRight) {
            setLiverCancerLeftorRight("");
            setLiverCancer(false);
            LiverFormJson.LiverCancerLeftorRight = "";
        } else {
            setLiverCancerLeftorRight(event.target.value);
            setLiverCancer(true);
            LiverFormJson.LiverCancerLeftorRight = event.target.value;
        }
        setLiverForm(delNullProperty(LiverFormJson));
    }

    //肝腫瘤不明前方Checkbox辨識
    function liverCancerUnknownLeftorRighthandleClick(event) {
        if (event.target.value === liverCancerUnknownLeftorRight) {
            setLiverCancerUnknownLeftorRight("");
            setLiverCancerUnknown(false);
            LiverFormJson.LiverCancerUnknownLeftorRight = "";
        } else {
            setLiverCancerUnknownLeftorRight(event.target.value);
            setLiverCancerUnknown(true);
            LiverFormJson.LiverCancerUnknownLeftorRight = event.target.value;
        }
        setLiverForm(delNullProperty(LiverFormJson));
    }

    return (
        <Box>
            <table width="100%">
                <tbody>
                    <tr>
                        <td rowSpan={9} width="10%">
                            肝臟
                        </td>
                        <td rowSpan={9} width="10%">
                            <Checkbox
                                checked={normal}
                                onChange={(event) => {
                                    setNormal(event.target.checked);
                                    if (event.target.checked) {
                                        LiverFormJson.normal = true;
                                    } else {
                                        LiverFormJson.normal = false;
                                    }
                                    setLiverForm(LiverFormJson);
                                }}
                            />
                            正常
                        </td>
                        <td colSpan={2}>
                            <Checkbox
                                checked={FLD}
                                onChange={(event) => {
                                    setFLD(event.target.checked);
                                }}
                                onClick={() => {
                                    setFLDLevel("");
                                    setFLD(false);
                                    LiverFormJson.FLDLevel = "";
                                    setLiverForm(
                                        delNullProperty(
                                            delNullProperty(LiverFormJson)
                                        )
                                    );
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
                        <td rowSpan={9} valign="top">
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={20}
                                placeholder="其他："
                                style={{ width: "95%" }}
                                value={remark}
                                onChange={(event) => {
                                    setRemark(event.target.value);
                                    LiverFormJson.Remark = event.target.value;
                                    setLiverForm(
                                        delNullProperty(LiverFormJson)
                                    );
                                }}
                            />
                        </td>
                    </tr>

                    {/*疑似肝實質病變*/}
                    <tr>
                        <td colSpan={2}>
                            <Checkbox
                                checked={suspectedLiverLesions}
                                onChange={(event) => {
                                    setSuspectedLiverLesions(
                                        event.target.checked
                                    );

                                    if (event.target.checked) {
                                        LiverFormJson.SuspectedLiverLesions = true;
                                    } else {
                                        LiverFormJson.SuspectedLiverLesions =
                                            "";
                                    }
                                    setLiverForm(
                                        delNullProperty(LiverFormJson)
                                    );
                                }}
                            />
                            疑似肝實質病變
                        </td>
                    </tr>

                    {/*肝實質病變*/}
                    <tr>
                        <td colSpan={2}>
                            <Checkbox
                                checked={liverLesions}
                                onChange={(event) => {
                                    setLiverLesions(event.target.checked);
                                    if (event.target.checked) {
                                        LiverFormJson.LiverLesions = true;
                                    } else {
                                        LiverFormJson.LiverLesions = "";
                                    }
                                    setLiverForm(
                                        delNullProperty(LiverFormJson)
                                    );
                                }}
                            />
                            肝實質病變
                        </td>
                    </tr>

                    {/*肝硬化*/}
                    <tr>
                        <td colSpan={2}>
                            <Checkbox
                                checked={liverCirrohsis}
                                onChange={(event) => {
                                    setLiverCirrohsis(event.target.checked);

                                    if (event.target.checked) {
                                        LiverFormJson.LiverCirrohsis = true;
                                    } else {
                                        LiverFormJson.LiverCirrohsis = "";
                                    }
                                    setLiverForm(
                                        delNullProperty(LiverFormJson)
                                    );
                                }}
                            />
                            肝硬化
                        </td>
                    </tr>

                    {/*肝囊腫*/}
                    <tr>
                        <td>
                            <Checkbox
                                checked={liverHepaticCyst}
                                onChange={(event) => {
                                    setLiverHepaticCyst(event.target.checked);
                                }}
                                onClick={() => {
                                    setLiverHepaticCyst(false);
                                    setLiverHepaticCystLeftorRight("");
                                    LiverFormJson.LiverHepaticCystLeftorRight =
                                        "";
                                    setLiverForm(
                                        delNullProperty(LiverFormJson)
                                    );
                                }}
                            />
                            肝囊腫
                        </td>
                        <td colSpan={2}>
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={liverHepaticCystLeftorRight}
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
                                                onClick={
                                                    liverHepaticCysthandleClick
                                                }
                                            />
                                        }
                                        onChange={(event) => {
                                            setLiverHepaticCystLeftorRight(
                                                event.target.value
                                            );
                                        }}
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
                                                onClick={
                                                    liverHepaticCysthandleClick
                                                }
                                            />
                                        }
                                        label="右葉"
                                        onChange={(event) => {
                                            setLiverHepaticCystLeftorRight(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                    </tr>

                    {/*血管瘤*/}
                    <tr>
                        <td>
                            <Checkbox
                                checked={angiomas}
                                onChange={(event) =>
                                    setAngiomas(event.target.checked)
                                }
                                onClick={() => {
                                    setAngiomasLeftorRight("");
                                    setAngiomas(false);
                                    LiverFormJson.AngiomasLeftorRight = "";
                                    setLiverForm(
                                        delNullProperty(LiverFormJson)
                                    );
                                }}
                            />
                            血管瘤
                        </td>
                        <td colSpan={2}>
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={angiomasLeftorRight}
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
                                                onClick={angiomashandleClick}
                                            />
                                        }
                                        label="左葉"
                                        onChange={(event) => {
                                            setAngiomasLeftorRight(
                                                event.target.value
                                            );
                                        }}
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
                                                onClick={angiomashandleClick}
                                            />
                                        }
                                        label="右葉"
                                        onChange={(event) => {
                                            setAngiomasLeftorRight(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                    </tr>

                    {/*肝內鈣化點*/}
                    <tr>
                        <td>
                            <Checkbox
                                checked={intrahepaticCalcification}
                                onChange={(event) => {
                                    setIntrahepaticCalcification(
                                        event.target.checked
                                    );
                                }}
                                onClick={() => {
                                    setIntrahepaticCalcification(false);
                                    setIntrahepaticCalcificationLeftorRight("");
                                    LiverFormJson.IntrahepaticCalcificationLeftorRight =
                                        "";
                                    setLiverForm(
                                        delNullProperty(LiverFormJson)
                                    );
                                }}
                            />
                            肝內鈣化點
                        </td>
                        <td colSpan={2}>
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={intrahepaticCalcificationLeftorRight}
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
                                                onClick={
                                                    intrahepaticCalcificationhandleClick
                                                }
                                            />
                                        }
                                        label="左葉"
                                        onChange={(event) => {
                                            setIntrahepaticCalcificationLeftorRight(
                                                event.target.value
                                            );
                                        }}
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
                                                onClick={
                                                    intrahepaticCalcificationhandleClick
                                                }
                                            />
                                        }
                                        label="右葉"
                                        onChange={(event) => {
                                            setIntrahepaticCalcificationLeftorRight(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                    </tr>

                    {/* 肝腫瘤(疑似肝癌)*/}
                    <tr>
                        <td>
                            <Checkbox
                                checked={liverCancer}
                                onChange={(event) => {
                                    setLiverCancer(event.target.checked);
                                }}
                                onClick={() => {
                                    setLiverCancer(false);
                                    setLiverCancerLeftorRight("");
                                    LiverFormJson.LiverCancerLeftorRight = "";
                                    setLiverForm(
                                        delNullProperty(LiverFormJson)
                                    );
                                }}
                            />
                            肝腫瘤(疑似肝癌)
                        </td>
                        <td colSpan={2}>
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={liverCancerLeftorRight}
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
                                                onClick={
                                                    liverCancerLeftorRighthandleClick
                                                }
                                            />
                                        }
                                        label="左葉"
                                        onChange={(event) => {
                                            setLiverCancerLeftorRight(
                                                event.target.value
                                            );
                                        }}
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
                                                onClick={
                                                    liverCancerLeftorRighthandleClick
                                                }
                                            />
                                        }
                                        label="右葉"
                                        onChange={(event) => {
                                            setLiverCancerLeftorRight(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                    </tr>

                    {/* 肝腫瘤(性質不明)*/}
                    <tr>
                        <td>
                            <Checkbox
                                checked={liverCancerUnknown}
                                onChange={(event) => {
                                    setLiverCancerUnknown(event.target.checked);
                                }}
                                onClick={() => {
                                    setLiverCancerUnknown(false);
                                    setLiverCancerUnknownLeftorRight("");
                                    LiverFormJson.LiverCancerUnknownLeftorRight =
                                        "";
                                    setLiverForm(
                                        delNullProperty(LiverFormJson)
                                    );
                                }}
                            />
                            肝腫瘤(性質不明)
                        </td>
                        <td>
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={liverCancerUnknownLeftorRight}
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
                                                onClick={
                                                    liverCancerUnknownLeftorRighthandleClick
                                                }
                                            />
                                        }
                                        label="左葉"
                                        onChange={(event) => {
                                            setLiverCancerUnknownLeftorRight(
                                                event.target.value
                                            );
                                        }}
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
                                                onClick={
                                                    liverCancerUnknownLeftorRighthandleClick
                                                }
                                            />
                                        }
                                        label="右葉"
                                        onChange={(event) => {
                                            setLiverCancerUnknownLeftorRight(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={() => pushLiverForm()}
            >
                Send
            </Button> */}
        </Box>
    );
};
export default Liver;
