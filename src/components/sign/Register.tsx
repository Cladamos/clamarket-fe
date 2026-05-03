import { Button, Checkbox, Divider, PasswordInput, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { IconBrandGoogleFilled } from "@tabler/icons-react"
import { useMutation } from "@tanstack/react-query"

type RegisterProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

export function Register({ setActiveTab }: RegisterProps) {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      termsAndConditions: false,
    },
    validate: {
      name: (value) => (value.length < 3 ? "Full name must be at least 3 characters" : null),
      email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length < 6 ? "Password must be at least 6 characters" : null),
      confirm_password: (value, values) => (value !== values.password ? "Passwords do not match" : null),
      termsAndConditions: (value) => (value ? null : "You must accept the terms and conditions"),
    },
  })

  const registerUser = useMutation({
    mutationKey: ["register"],
    mutationFn: async (values: any) => {
      const res = await fetch("http://localhost:8080/api/users/register", {
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

  function handleSumbit(values: any) {
    registerUser.mutate(values)
  }

  return (
    <form onSubmit={form.onSubmit(handleSumbit)}>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-col gap-1 pb-2">
          <p className="text-xl text-blue-200 font-semibold">Create an account</p>
          <p className="text-sm text-gray-600 ">Join the awesomeness of Clamarket!</p>
        </div>
        <TextInput label="Full Name" placeholder="Enter your name" {...form.getInputProps("name")} />
        <TextInput label="Email" placeholder="Enter your email" {...form.getInputProps("email")} />
        <div className="flex flex-row gap-4">
          <PasswordInput label="Password" w="50%" placeholder="••••••••••" {...form.getInputProps("password")} />
          <PasswordInput label="Confirm" w="50%" placeholder="••••••••••" {...form.getInputProps("confirm_password")} />
        </div>
        <Checkbox
          py="sm"
          label={
            <p>
              I accept the <span className="text-blue-200 cursor-pointer hover:underline">Terms and Conditions</span>
            </p>
          }
          {...form.getInputProps("termsAndConditions", { type: "checkbox" })}
        />
        <Button type="submit">Register</Button>
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
    </form>
  )
}
