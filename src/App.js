import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Liver from "./component/Liver";
import { GiLiver } from "react-icons/gi";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

export default function App() {
    const [value, setValue] = React.useState(0);
    const [liverForm, setLiverForm] = React.useState(""); //接收Liver回傳props

    console.log(liverForm);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
            }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    borderRight: 2,
                    borderColor: "divider",
                    minWidth: "15%",
                    
                }}
            >
                <Tab icon={<GiLiver/>} iconPosition="start" label="肝臟" {...a11yProps(0)} sx={{ fontSize: 30 }} />
                <Tab label="膽囊" {...a11yProps(1)} sx={{ fontSize: 30 }}/>
                <Tab label="腎臟" {...a11yProps(2)} sx={{ fontSize: 30 }}/>
                <Tab label="胰臟" {...a11yProps(3)} sx={{ fontSize: 30 }}/>
                <Tab label="脾臟" {...a11yProps(4)} sx={{ fontSize: 30 }}/>
                <Tab label="建議" {...a11yProps(5)} sx={{ fontSize: 30 }}/>
            </Tabs>
            <TabPanel value={value} index={0}>
                <Liver liverForm={liverForm} setLiverForm={setLiverForm} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
        </Box>
    );
}
