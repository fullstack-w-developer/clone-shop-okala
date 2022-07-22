import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
interface props {
  product: any;
}
const TabsProduct = ({product}:props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "60px" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          fontFamily: "yekanBold",
          //   color: "#F01436",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: {
              backgroundColor: "#f01436",
            },
          }}
        >
          <Tab
            style={{
              color: value === 0 ? "#F01436 " : "#000",
              fontFamily: "reqularyekan",
            }}
            label="ویژگی محصول"
          />
          <Tab
            style={{
              color: value === 1 ? "#F01436 " : "#000",
              fontFamily: "reqularyekan",
            }}
            label="توضیحیات محصول"
          />
          <Tab
            style={{
              color: value === 2 ? "#F01436 " : "#000",
              fontFamily: "reqularyekan",
            }}
            label="نظرات کاربران"
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {product.property}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {product.description}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {product.userComments}
      </TabPanel>
    </Box>
  );
};

export default TabsProduct;
