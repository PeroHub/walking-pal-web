import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import walker from "../../../assets/png/ceo.png";
import { flexbox } from "@mui/system";

const teamData = {
	vp: [
		{ name: "Peter Ime", decs: "CEO mrpcode", bgColor: "#f2f454" },
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
	],
	members: [
		{ name: "Peter Ime", decs: "CEO mrpcode", bgColor: "#f2f454" },
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
		{
			name: "Peter Ime",
			decs: "CEO mrpcode",
			bgColor: "#f2f454",
			image: walker,
		},
	],
};

export const Team: FC = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#FAFAFA",
				marginTop: { xs: "150px", md: "200px" },
				marginBottom: "50px",
			}}
		>
			<Box
				sx={{
					width: { xs: "100%", md: "80%" },
					margin: "0 auto",
					marginTop: "20px",
					marginBottom: "100px",
				}}
			>
				<Typography variant="h3" textAlign={"center"}>
					Meet the{" "}
					<Typography color={"#FF5959"} fontSize={"3.6rem"} component="span">
						team
					</Typography>
				</Typography>
				<Typography textAlign={"center"} mb={4}>
					Here’s the wizards that changed your boring and lonely walks into a
					fun and interesting one forever.
				</Typography>
				<Box
					sx={{
						display: { xs: "block", md: "flex" },
						gap: "15px",
						marginTop: "20px",
					}}
				>
					{teamData.vp.map((item, index) => (
						<Box
							key={index}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								width: { xs: "100%", md: "50%" },
							}}
						>
							<Box
								sx={{
									backgroundColor: item.bgColor,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: "30px",
								}}
							>
								<Image
									src={item.image ? item.image : ""}
									alt={item.image ? `${item.name}` : ""}
									width={350}
									height={300}
								/>
							</Box>
							<Box sx={{ marginTop: "5px" }}>
								<Typography
									variant="h4"
									textAlign={{ xs: "center", md: "left" }}
									fontSize={"1.9rem"}
									fontWeight={"400"}
								>
									{item.name}
								</Typography>
								<Typography textAlign={{ xs: "center", md: "left" }}>
									{item.decs}
								</Typography>
							</Box>
						</Box>
					))}
				</Box>
				<Box
					sx={{
						display: { xs: "block", md: "flex" },
						justifyContent: "space-between",
						marginTop: "20px",
						gap: "15px",
						alignItems: "center",
						flexWrap: "wrap",
						border: "1px solid red",
					}}
				>
					{teamData.members.map((item, index) => (
						<Box
							key={index}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								width: { xs: "100%", sm: "40%", md: "23%" },
								marginTop: "10px",
							}}
						>
							<Box
								sx={{
									backgroundColor: "#67CBC9",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: "15px",
								}}
							>
								<Image
									src={item.image ? item.image : ""}
									alt={item.image ? `${item.name}` : ""}
									width={350}
									height={300}
								/>
							</Box>
							<Box sx={{ marginTop: "5px" }}>
								<Typography
									variant="h4"
									textAlign={{ xs: "center", md: "left" }}
									fontSize={"1.9rem"}
									fontWeight={"400"}
									color={"#000000"}
								>
									{item.name}
								</Typography>
								<Typography fontSize={"16px"}>{item.decs}</Typography>
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};
