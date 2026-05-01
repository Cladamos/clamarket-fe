import { Button, Divider, PasswordInput, TextInput } from "@mantine/core"
import { IconBrandGoogleFilled } from "@tabler/icons-react"

type LoginProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

export function Login({ setActiveTab }: LoginProps) {
  return (
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
  )
}
