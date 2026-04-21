import { ActionIcon, AppShell, Burger, Button, Container, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconShoppingCartFilled, IconUserFilled } from "@tabler/icons-react"
import { useNavigate } from "react-router"

type HeaderButton = {
  label: string
  href: string
}

const headerButtons: HeaderButton[] = [
  {
    label: "Catalog",
    href: "/catalog",
  },
  {
    label: "Collections",
    href: "/collections",
  },
  {
    label: "About",
    href: "/about",
  },
]

export function Header({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure()
  let navigate = useNavigate()
  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: true },
      }}
    >
      <AppShell.Header py="sm">
        <Container size="md">
          <div className="flex justify-between items-center">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Text fw={700} size="lg" className="cursor-pointer" onClick={() => navigate("/")}>
              Clamarket
            </Text>
            <div className="hidden sm:flex gap-4">
              {headerButtons.map((button) => (
                <Button size="sm" c="blue" variant="subtle" key={button.href} onClick={() => navigate(button.href)}>
                  {button.label}
                </Button>
              ))}
            </div>
            <div className="flex gap-4">
              <ActionIcon size="lg" p={6} variant="subtle">
                <IconShoppingCartFilled />
              </ActionIcon>
              <ActionIcon visibleFrom="sm" size="lg" p={6} variant="subtle">
                <IconUserFilled />
              </ActionIcon>
            </div>
          </div>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar>
        <div className="flex flex-col gap-4 p-4 items-start">
          {headerButtons.map((button) => (
            <Button size="sm" c="blue" variant="transparent" key={button.href} onClick={() => navigate(button.href)}>
              {button.label}
            </Button>
          ))}
        </div>
      </AppShell.Navbar>
      <AppShell.Main>
        <Container size="md">{children}</Container>
      </AppShell.Main>
    </AppShell>
  )
}
