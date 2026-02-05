import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent
} from "@mui/material";

import {
  Event,
  Star,
  Timeline,
  NotificationsActive
} from "@mui/icons-material";

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          <span style={{ color: "#0f172a" }}>About</span>{" "}
          <span style={{ color: "#2563eb" }}>DateAxis+</span>
        </Typography>
        <Typography variant="h6" color="text.secondary">
          A calm, reliable space to track the dates that truly matter.
        </Typography>
      </Box>

      {/* Intro Section */}
      <Box mb={6}>
        <Typography
          variant="body1"
          fontSize="1.1rem"
          lineHeight={1.8}
          sx={{ color: "#0f172a" }}
        >
          <strong style={{ color: "#2563eb" }}>DateAxis+</strong> is a modern
          life-event tracking platform designed to help people remember and
          organize important dates — from exams and medical visits to legal
          milestones and personal moments.  
          <br /><br />
          We focus on clarity, simplicity, and trust, so you can spend less time
          worrying about forgetting dates and more time focusing on what
          matters.
        </Typography>
      </Box>

      {/* Vision & Mission */}
      <Grid container spacing={4} mb={6}>
        <Grid item xs={12} md={6}>
          <Card elevation={4} sx={{ height: "100%", borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Our Vision
              </Typography>
              <Typography color="text.secondary" lineHeight={1.7}>
                To become a trusted digital timeline for everyday life —
                helping people stay prepared, organized, and confident about
                their important dates.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={4} sx={{ height: "100%", borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Our Mission
              </Typography>
              <Typography color="text.secondary" lineHeight={1.7}>
                To simplify how people track exams, appointments, deadlines,
                and milestones by providing a clean, distraction-free, and
                reliable experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Features Section */}
      <Box mb={6}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          sx={{ color: "#0f172a" }}
        >
          Why Choose{" "}
          <span style={{ color: "#2563eb" }}>DateAxis+</span>
        </Typography>

        <Grid container spacing={4} mt={2}>
          <Grid item xs={12} md={3}>
            <Card elevation={3} sx={{ textAlign: "center", p: 3, borderRadius: 3 }}>
              <Event fontSize="large" color="primary" />
              <Typography fontWeight="bold" mt={2}>
                Centralized Dates
              </Typography>
              <Typography color="text.secondary" fontSize="0.95rem">
                Keep all important life events in one secure place.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card elevation={3} sx={{ textAlign: "center", p: 3, borderRadius: 3 }}>
              <Star fontSize="large" color="primary" />
              <Typography fontWeight="bold" mt={2}>
                Priority Tracking
              </Typography>
              <Typography color="text.secondary" fontSize="0.95rem">
                Mark critical dates and focus on what matters most.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card elevation={3} sx={{ textAlign: "center", p: 3, borderRadius: 3 }}>
              <Timeline fontSize="large" color="primary" />
              <Typography fontWeight="bold" mt={2}>
                Clear Timeline
              </Typography>
              <Typography color="text.secondary" fontSize="0.95rem">
                See upcoming events with days remaining at a glance.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card elevation={3} sx={{ textAlign: "center", p: 3, borderRadius: 3 }}>
              <NotificationsActive fontSize="large" color="primary" />
              <Typography fontWeight="bold" mt={2}>
                Future-Ready
              </Typography>
              <Typography color="text.secondary" fontSize="0.95rem">
                Built to support reminders and notifications as it grows.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Closing Section */}
      <Box textAlign="center" mt={8}>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#0f172a" }}
        >
          <span style={{ color: "#2563eb" }}>DateAxis+</span> — Designed to
          Remember What Matters
        </Typography>
        <Typography color="text.secondary" maxWidth="700px" mx="auto">
          Life moves fast. Important dates shouldn’t get lost in the noise.
          DateAxis+ helps you stay prepared, calm, and in control — one date at
          a time.
        </Typography>
      </Box>
    </Container>
  );
}
