"use client";
import { Card, Input, Button } from "@nextui-org/react";

export default function Login() {
  return (
    <div className="flex flex-col w-full">
      <Card className="dark  w-[400px] h-[300px]">
        <form className="flex p-5 flex-col gap-4">
          <Input
            isRequired
            label="Phone"
            placeholder="Enter your phone number"
            type="phone"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span>+971</span>
              </div>
            }
          />
          <Input
            isRequired
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          <div className="flex gap-2 justify-center">
            <Button color="primary">Login</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
