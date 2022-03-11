import {
    Checkbox,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
} from "@mui/material";
import { red, green, blue } from "@mui/material/colors";

const Liver = () => {
    return (
        <>
            <table class="tg" border="1">
                <thead>
                    <tr>
                        <td class="tg-0lax" rowspan="9">
                            <Checkbox />
                            正常
                        </td>
                        <td class="tg-0lax">
                            <Checkbox />
                            脂肪肝
                            <FormControl style={{ paddingLeft: 10 }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="輕度"
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
                                        label="輕度"
                                    />
                                    <FormControlLabel
                                        value="中度"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: blue[800],
                                                    "&.Mui-checked": {
                                                        color: blue[600],
                                                    },
                                                }}
                                            />
                                        }
                                        label="中度"
                                    />
                                    <FormControlLabel
                                        value="重度"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: red[700],
                                                    "&.Mui-checked": {
                                                        color: red[700],
                                                    },
                                                }}
                                            />
                                        }
                                        label="重度"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                        <td class="tg-0lax" rowspan="4">
                            其他
                        </td>
                    </tr>

                    <tr>
                        <td class="tg-0lax">
                            <Checkbox />
                            疑似肝實質病變
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">
                            <Checkbox />
                            肝實質病變
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">
                            <Checkbox />
                            肝硬化
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0lax" colspan="">
                            <Checkbox />
                            肝囊腫
                        </td>
                        <td>
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
                        <td class="tg-0lax" colspan="2">
                            <Checkbox />
                            血管瘤
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0lax" colspan="2">
                            <Checkbox />
                            肝內鈣化點
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0lax" colspan="2">
                            <Checkbox />
                            肝腫瘤(疑似肝癌)
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-0lax" colspan="2">
                            <Checkbox />
                            肝腫瘤(性質不明)
                        </td>
                    </tr>
                </thead>
            </table>
        </>
    );
};
export default Liver;
