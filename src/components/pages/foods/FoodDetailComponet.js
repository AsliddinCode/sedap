import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

export default function FoodDetailComponent(props) {
  const router = useRouter();
  const { data } = props;
  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: "40px" }}>
        <Grid
          size={6}
          sx={{
            padding: "41px 0px",
            border: "1px solid #0000000A",
            borderRadius: "14px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 4px 4px 0px #0000000A",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                color: "#202020",
                paddingLeft: "63px",
              }}
            >
              Detail Menus
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#A5A5A5",
                paddingRight: "63px",
                display: "flex",
              }}
            >
              Category: {data?.type?.category?.name} /{" "}
              <span style={{ color: "#00B074" }}> {data?.type?.name}</span>
            </p>
          </Box>
          <Box
            sx={{
              margin: "0px 63px",
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "195px",
                height: "214px",
                backgroundColor: "#C4C4C4",
                borderRadius: "14px",
              }}
            >
              <img
                width={200}
                height={200}
                src={data?.image}
                alt="test"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <Box
              sx={{
                maxWidth: "312px",
                marginLeft: "44px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  color: "#00B074",
                  marginBottom: "6px",
                }}
              >
                Stock Available
              </p>
              <h3
                style={{
                  fontSize: "28px",
                  color: "#464255",
                  maxWidth: "274px",
                  marginBottom: "13px",
                }}
              >
                {data.name}
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  color: "#A3A3A3",
                  maxWidth: "292px",
                  marginBottom: "18px",
                }}
              >
                {data.comment}
              </p>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#00B074",
                    borderRadius: "12px",
                    color: "white",
                    padding: "12px 28px",
                  }}
                >
                  Add Menu
                </Button>
                <Button
                  onClick={() => router.push(`/foods/${data.documentId}/edit`)}
                  variant="contained"
                  sx={{
                    backgroundColor: "#F3F2F7",
                    borderRadius: "12px",
                    color: "#585858",
                    padding: "12px 28px",
                  }}
                >
                  Edit Menu
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "26px 63px",
              borderTop: "1px dashed #C2C2C2",
              marginTop: "60px",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                color: "#464255",
              }}
            >
              Ingredients
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#A3A3A3",
                marginTop: "22px",
              }}
            >
              {data.ingredients}
            </p>
          </Box>
          <Box
            sx={{
              padding: "26px 63px",
              borderTop: "1px dashed #C2C2C2",
              marginTop: "30px",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                color: "#464255",
              }}
            >
              Nutrition Info
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#A3A3A3",
                marginTop: "22px",
              }}
            >
              {data.nutritionInfo}
            </p>
          </Box>
        </Grid>
        <Grid
          size={6}
          sx={{
            padding: "41px 0px",
            border: "1px solid #0000000A",
            borderRadius: "14px",
          }}
        >
          Coming soon!
        </Grid>
      </Grid>
    </>
  );
}
