import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MySearch() {

  return (
    <div className="flex w-full max-w-screen-2xl mx-auto px-10 my-10 md:px-20 items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button className="bg-gradient hover:cursor-pointer" type="submit">Submit</Button>
    </div>
  )
}
