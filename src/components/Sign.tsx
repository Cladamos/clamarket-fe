import { useState } from "react"
import { Button, Card, Checkbox, Divider, PasswordInput, Tabs, TextInput } from "@mantine/core"
import { IconBrandGoogleFilled } from "@tabler/icons-react"

export function Sign() {
  const [activeTab, setActiveTab] = useState<string | null>("register")

  return (
    <div className="flex justify-center">
      <Card w={450}>
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="register">Register</Tabs.Tab>
            <Tabs.Tab value="login">Login</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="register" p="sm">
            <div className="flex flex-col gap-4 py-4">
              <div className="flex flex-col gap-1 pb-2">
                <p className="text-xl text-blue-200 font-semibold">Create an account</p>
                <p className="text-sm text-gray-600 ">Join the awesomeness of Clamarket!</p>
              </div>
              <TextInput label="Full Name" placeholder="Enter your username"></TextInput>
              <TextInput label="Email" placeholder="Enter your email"></TextInput>
              <div className="flex flex-row gap-4">
                <PasswordInput label="Password" w="50%" placeholder="••••••••••"></PasswordInput>
                <PasswordInput label="Confirm" w="50%" placeholder="••••••••••"></PasswordInput>
              </div>
              <Checkbox
                py="sm"
                label={
                  <p>
                    I accept the <span className="text-blue-200 cursor-pointer hover:underline">Terms and Conditions</span>
                  </p>
                }
              />
              <Button>Register</Button>
              <Button color="blue" variant="outline" leftSection={<IconBrandGoogleFilled size={20} />}>
                Continue with Google
              </Button>
              <Divider mt="xs" />
              <p className="text-sm text-center text-gray-500">
                Already have an account?{" "}
                <span onClick={() => setActiveTab("login")} className="text-blue-200 cursor-pointer hover:underline ml-1">
                  {" "}
                  Sign In
                </span>
              </p>
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="login" p="sm">
            <div className="flex flex-col gap-4 py-4">
              <p className="text-xl text-blue-200 font-semibold">Login your account</p>
              <TextInput label="Email" placeholder="Enter your email"></TextInput>
              <PasswordInput label="Password" placeholder="••••••••••"></PasswordInput>
              <Button>Login</Button>
              <Button color="blue" variant="outline" leftSection={<IconBrandGoogleFilled size={20} />}>
                Continue with Google
              </Button>
              <Divider mt="xs" />
              <p className="text-sm text-center text-gray-500">
                Don't have an account?{" "}
                <span onClick={() => setActiveTab("register")} className="text-blue-200 cursor-pointer hover:underline ml-1">
                  {" "}
                  Register
                </span>
              </p>
            </div>
          </Tabs.Panel>
        </Tabs>
      </Card>
    </div>
  )
}
