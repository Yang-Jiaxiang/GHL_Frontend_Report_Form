import React, { useState, useEffect } from "react";
import {
    Checkbox,
    FormControl,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextareaAutosize,
} from "@mui/material";
import { red, green, blue } from "@mui/material/colors";

const Liver = () => {
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
    //脂肪肝前方Checkbox辨識
    function FLDLevelhandleClick(event) {
        if (event.target.value === FLDLevel) {
            setFLDLevel("");
            setFLD(false);
        } else {
            setFLDLevel(event.target.value);
            setFLD(true);
        }
    }

    //肝囊腫前方Checkbox辨識
    function liverHepaticCysthandleClick(event) {
        if (event.target.value === liverHepaticCystLeftorRight) {
            setLiverHepaticCystLeftorRight("");
            setLiverHepaticCyst(false);
        } else {
            setLiverHepaticCystLeftorRight(event.target.value);
            setLiverHepaticCyst(true);
        }
    }

    //血管瘤前方Checkbox辨識
    function angiomashandleClick(event) {
        if (event.target.value === angiomasLeftorRight) {
            setAngiomasLeftorRight("");
            setAngiomas(false);
        } else {
            setAngiomasLeftorRight(event.target.value);
            setAngiomas(true);
        }
    }

    //肝內鈣化點前方Checkbox辨識
    function intrahepaticCalcificationhandleClick(event) {
        if (event.target.value === intrahepaticCalcificationLeftorRight) {
            setIntrahepaticCalcificationLeftorRight("");
            setIntrahepaticCalcification(false);
        } else {
            setIntrahepaticCalcificationLeftorRight(event.target.value);
            setIntrahepaticCalcification(true);
        }
    }

    //肝腫瘤癌症前方Checkbox辨識
    function liverCancerLeftorRighthandleClick(event) {
        if (event.target.value === liverCancerLeftorRight) {
            setLiverCancerLeftorRight("");
            setLiverCancer(false);
        } else {
            setLiverCancerLeftorRight(event.target.value);
            setLiverCancer(true);
        }
    }

    //肝腫瘤不明前方Checkbox辨識
    function liverCancerUnknownLeftorRighthandleClick(event) {
        if (event.target.value === liverCancerUnknownLeftorRight) {
            setLiverCancerUnknownLeftorRight("");
            setLiverCancerUnknown(false);
        } else {
            setLiverCancerUnknownLeftorRight(event.target.value);
            setLiverCancerUnknown(true);
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
                            <Checkbox
                                checked={suspectedLiverLesions}
                                onChange={(event) => {
                                    setSuspectedLiverLesions(
                                        event.target.checked
                                    );
                                }}
                            />
                            疑似肝實質病變
                        </td>
                    </tr>

                    <tr>
                        <td class="tg-0pky" colspan="2">
                            <Checkbox
                                checked={liverLesions}
                                onChange={(event) => {
                                    setLiverLesions(event.target.checked);
                                }}
                            />
                            肝實質病變
                        </td>
                    </tr>

                    <tr>
                        <td class="tg-0pky" colspan="2">
                            <Checkbox
                                checked={liverCirrohsis}
                                onChange={(event) => {
                                    setLiverCirrohsis(event.target.checked);
                                }}
                            />
                            肝硬化
                        </td>
                    </tr>

                    <tr>
                        <td class="tg-0pky">
                            <Checkbox
                                checked={liverHepaticCyst}
                                onChange={(event) => {
                                    setLiverHepaticCyst(event.target.checked);
                                }}
                            />
                            肝囊腫
                        </td>
                        <td class="tg-0pky" colspan="2">
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={liverHepaticCystLeftorRight}
                                >
                                    <FormControlLabel
                                        value="Left"
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
                                        value="Right"
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

                    <tr>
                        <td class="tg-0pky">
                            <Checkbox
                                checked={angiomas}
                                onChange={(event) =>
                                    setAngiomas(event.target.checked)
                                }
                            />
                            血管瘤
                        </td>
                        <td class="tg-0pky" colspan="2">
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={angiomasLeftorRight}
                                >
                                    <FormControlLabel
                                        value="Left"
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
                                        value="Right"
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

                    <tr>
                        <td class="tg-0pky">
                            <Checkbox
                                checked={intrahepaticCalcification}
                                onChange={(event) => {
                                    setIntrahepaticCalcification(event.target.checked);
                                }}
                            />
                            肝內鈣化點
                        </td>
                        <td class="tg-0pky" colspan="2">
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
                                        onchange={(event) => {
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
                                        onchange={(event) => {
                                            setIntrahepaticCalcificationLeftorRight(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                    </tr>

                    <tr>
                        <td class="tg-0pky">
                            <Checkbox
                                checked={liverCancer}
                                onChange={(event) => {
                                    setLiverCancer(event.target.checked);
                                }}
                            />
                            肝腫瘤(疑似肝癌)
                        </td>
                        <td class="tg-0pky" colspan="2">
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
                                        onchange={(event) => {
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
                                        onchange={(event) => {
                                            setLiverCancerLeftorRight(
                                                event.target.value
                                            );
                                        }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                    </tr>

                    <tr>
                        <td class="tg-0pky">
                            <Checkbox
                                checked={liverCancerUnknown}
                                onChange={(event) => {
                                    setLiverCancerUnknown(event.target.checked);
                                }}
                            />
                            肝腫瘤(性質不明)
                        </td>
                        <td class="tg-0pky">
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
                                        onchange={(event) => {
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
                                        onchange={(event) => {
                                            setLiverCancerUnknownLeftorRight(
                                                event.target.value
                                            );
                                        }}
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
