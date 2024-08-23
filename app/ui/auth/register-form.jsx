"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { lexendDeca } from "@/app/ui/fonts";

export default function RegisterForm() {
  return (
    <div className="max-w-[314px] md:max-w-[466px] md:px-[30px] md:py-10 md:bg-white rounded-[10px] md:flex md:flex-col md:justify-center md:h-fit md:shadow-lg">
      <h3 className={`${lexendDeca.className} text-2xl font-bold text-center `}>
        Welcome to Forwardin
      </h3>
      <p className="text-sm text-center">
        Revolutionize your communication journey with FowardIt today
      </p>
      <form action="">
        <div className="flex flex-col gap-4 py-7">
          <Input type="email" name="email" placeholder="Email" />
          <Input type="text" name="username" placeholder="Username " />

          <Input
            type="text"
            maxLength={12}
            id="phoneNumber"
            name="phoneNumber"
            pattern="\d{10,12}"
            placeholder="Whatsapp Phone Number"
          />

          <Input type="password" name="password" placeholder="Password" />
          <div className="px-5 py-3 bg-netral-foreground">
            <ul className="text-xs list-none list-inside">
              <li>Password harus mengandung: </li>
              <ul className="list-none list-inside">
                <li>Paling tidak 8 karakter</li>
                <li>
                  Paling tidak 3 dari syarat berikut:
                  <ul>
                    <li>Huruf kecil (a-z)</li>
                    <li>Huruf besar (A-Z)</li>
                    <li>Angka Karakter Spesial (!@#$%^&*)</li>
                  </ul>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <button className="w-full py-3 text-white rounded-md bg-primary">
          Sign Up
        </button>
      </form>
      <p className="text-sm font-medium text-center mt-7">
        Sudah punya akun?{" "}
        {
          <Link href="/auth/login" className="text-primary">
            Masuk di sini
          </Link>
        }
      </p>
    </div>
  );
}