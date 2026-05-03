import { Button, Divider, PasswordInput, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { IconBrandGoogleFilled } from "@tabler/icons-react"
import { useMutation } from "@tanstack/react-query"

type LoginProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

export function Login({ setActiveTab }: LoginProps) {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length < 1 ? "Password is required" : null),
    },
  })

  const loginUser = useMutation({
    mutationKey: ["login"],
    mutationFn: async (values: any) => {
      const res = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
      return res.json()
    },
    //TODO: handle errors
    onSuccess: () => {
      form.reset()
    },
  })

  function handleSubmit(values: any) {
    loginUser.mutate(values)
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <div className="flex flex-col gap-4 py-4">
        <p className="text-xl text-blue-200 font-semibold">Login your account</p>
        <TextInput label="Email" placeholder="Enter your email" {...form.getInputProps("email")} />
        <PasswordInput label="Password" placeholder="••••••••••" {...form.getInputProps("password")} />
        <Button type="submit">Login</Button>
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
    </form>
  )
}
