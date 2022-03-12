import react, { useState, useEffect } from "react";
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
import SendIcon from "@mui/icons-material/Send";
import delNullProperty from "./delNullProperty";

const Gallbladder = (props) => {
    const setGallbladderForm = props.setGallbladderForm;
    const gallbladderFormJson = props.gallbladderForm;

    const [gallstones, setGallstones] = useState(false); //膽結石
    const [gallstonesSingleOrMany, setGallstonesSingleOrMany] = useState(""); //膽結石單一或多發

    const [gallbladderPolyp, setGallbladderPolyp] = useState(false); //膽息肉
    const [gallbladderPolypSingleOrMany, setGallbladderPolypSingleOrMany] =
        useState(""); //膽息肉單一或多發
    const [remark, setRemark] = useState(""); //其他

    useEffect(() => {
        //其他
        if (gallbladderFormJson.Remark === undefined) {
            setRemark("");
        } else {
            setRemark(gallbladderFormJson.Remark);
        }

        //膽結石
        if (gallbladderFormJson.GallstonesSingleOrMany === undefined) {
            setGallstonesSingleOrMany("");
        } else {
            setGallstones(true);
            setGallstonesSingleOrMany(
                gallbladderFormJson.GallstonesSingleOrMany
            );
        }

        //膽息肉
        if (gallbladderFormJson.GallbladderPolypSingleOrMany === undefined) {
            setGallbladderPolypSingleOrMany("");
        } else {
            setGallbladderPolyp(true);
            setGallbladderPolypSingleOrMany(
                gallbladderFormJson.GallbladderPolypSingleOrMany
            );
        }
    }, []);

    //膽結石前方Checkbox辨識
    function GallstoneshandleClick(event) {
        //膽結石
        if (event.target.value === gallstonesSingleOrMany) {
            setGallstonesSingleOrMany("");
            setGallstones(false);
            gallbladderFormJson.GallstonesSingleOrMany = "";
        } else {
            setGallstonesSingleOrMany(event.target.value);
            setGallstones(true);
            gallbladderFormJson.GallstonesSingleOrMany = event.target.value;
        }
        setGallbladderForm(delNullProperty(gallbladderFormJson));
    }

    //膽息肉前方Checkbox辨識
    function GallbladderPolyphandleClick(event) {
        if (event.target.value === gallbladderPolypSingleOrMany) {
            setGallbladderPolypSingleOrMany("");
            setGallbladderPolyp(false);
            gallbladderFormJson.GallbladderPolypSingleOrMany = "";
        } else {
            setGallbladderPolypSingleOrMany(event.target.value);
            setGallbladderPolyp(true);
            gallbladderFormJson.GallbladderPolypSingleOrMany =
                event.target.value;
        }
        setGallbladderForm(delNullProperty(gallbladderFormJson));
    }

    return (
        <Box>
            {gallbladderFormJson.resource}
            <table border="1" width="100%">
                <tbody>
                    <tr>
                        <td rowSpan={3} width="10%">
                            <Checkbox />
                            正常
                        </td>
                        <td>
                            <Checkbox
                                checked={gallstones}
                                onChange={(event) => {
                                    setGallstones(event.target.checked);
                                }}
                                onClick={() => {
                                    setGallstonesSingleOrMany("");
                                    setGallstones(false);
                                    gallbladderFormJson.GallstonesSingleOrMany =
                                        "";
                                    setGallbladderForm(
                                        delNullProperty(gallbladderFormJson)
                                    );
                                }}
                            />
                            膽結石：
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={gallstonesSingleOrMany}
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
                                                onClick={GallstoneshandleClick}
                                            />
                                        }
                                        label="單一"
                                        onChange={(event) => {
                                            setGallstonesSingleOrMany(
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
                                                onClick={GallstoneshandleClick}
                                            />
                                        }
                                        label="多發"
                                        onChange={(event) => {
                                            setGallstonesSingleOrMany(
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
                                checked={gallbladderPolyp}
                                onChange={(event) => {
                                    setGallbladderPolyp(event.target.checked);
                                }}
                                onClick={() => {
                                    setGallbladderPolypSingleOrMany("");
                                    setGallbladderPolyp(false);
                                    gallbladderFormJson.GallbladderPolypSingleOrMany =
                                        "";
                                    setGallbladderForm(
                                        delNullProperty(gallbladderFormJson)
                                    );
                                }}
                            />
                            膽息肉：
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={gallbladderPolypSingleOrMany}
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
                                                onClick={
                                                    GallbladderPolyphandleClick
                                                }
                                            />
                                        }
                                        label="單一"
                                        onChange={(event) => {
                                            setGallbladderPolypSingleOrMany(
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
                                                onClick={
                                                    GallbladderPolyphandleClick
                                                }
                                            />
                                        }
                                        label="多發"
                                        onChange={(event) => {
                                            setGallbladderPolypSingleOrMany(
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
                                    gallbladderFormJson.Remark =
                                        event.target.value;
                                    setGallbladderForm(
                                        delNullProperty(gallbladderFormJson)
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

export default Gallbladder;
