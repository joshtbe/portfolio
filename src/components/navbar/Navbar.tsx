import { AppBar, Button, Toolbar, Typography } from "@mui/material";

function NavbarButton({
    link,
    label,
    newTab = false,
}: {
    link: string;
    label: string;
    newTab?: boolean;
}) {
    const linkProps = {
        href: newTab ? link : undefined,
        target: newTab ? "_blank" : undefined,
        onClick: () => !newTab && window.open(link),
    };

    return (
        <Button
            color="inherit"
            sx={{ fontSize: "inherit", textTransform: "none" }}
            {...linkProps}
        >
            {label}
        </Button>
    );
}

const Spacer = () => <span style={{ marginLeft: "1rem" }}></span>;

export default function Navbar() {
    return (
        <div style={{ position: "relative" }}>
            <AppBar position="sticky" sx={{ zIndex: 20 }} color="inherit">
                <Toolbar>
                    <img src="/me.svg" height={75} style={{ padding: 10 }} />
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1, m: 1, fontWeight: 500 }}
                    >
                        Joshua Bernstein
                    </Typography>
                    <span style={{ fontSize: "Larger" }}>
                        <NavbarButton link="./JoshuaBernstein_Resume.pdf" label="Resume" newTab />
                        <Spacer />
                        <NavbarButton
                            link="https://www.linkedin.com/in/joshua-bernstein-9700261b0/"
                            label="LinkedIn"
                            newTab
                        />
                        <Spacer />
                        <NavbarButton
                            link="https://github.com/joshtbe"
                            label="GitHub"
                            newTab
                        />
                    </span>
                </Toolbar>
            </AppBar>
        </div>
    );
}
