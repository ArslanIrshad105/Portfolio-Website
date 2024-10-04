"use client";
import React, { useEffect, useState } from "react";
import { Typography, Container, Box, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SKILLS } from "../../utils/Data/Data";

const SkillsSection = () => {
  const [skillData, setSkillData] = useState([]);

  useEffect(() => {
    setSkillData(SKILLS);
  }, [skillData]);

  return (
    <Box
      sx={{
        backgroundColor: "#0788ff1a",
        padding: "100px 0",
        position: "relative",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Text Section */}
          <Grid>
            <Typography
              variant="overline"
              sx={{
                color: "#fff",
                letterSpacing: "1px",
                backgroundColor: "#0788ff33",
                padding: "12px 16px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              SKILLS
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: "#ffffff",
                fontSize: "40px",
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              MY SKILLS
            </Typography>
          </Grid>

          {/* Skills Cards */}
          <Box>
            <Grid>
              <Grid container spacing={2}>
                {skillData?.map((skill, index) => (
                  <Grid
                    conatiner
                    key={index}
                    size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
                  >
                    <Card
                      sx={{
                        backgroundColor: "#04192d",

                        color: "#fff",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "2px solid #0085ff",
                        "&:hover": {
                          borderColor: "#fff",
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={skill.icon}
                          height={55}
                          width={55}
                          style={{ marginBottom: "10px" }}
                        />
                        <Typography
                          variant="h6"
                          sx={{ fontSize: "1rem", fontWeight: "bold" }}
                        >
                          {skill.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;
