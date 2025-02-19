"use client";
import Image from "next/image";
import { CreditCard, LogOut, Settings, ShoppingBag, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

/* export const metadata: Metadata = {
  title: "Profile | ShoeShop",
  description: "Manage your ShoeShop account and preferences",
}; */

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("account");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="lg:max-w-screen-xl lg:mx-auto min-h-[80dvh]">
      <div className="">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <aside className="hidden lg:block pb-12 lg:col-span-1">
              <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                  <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                    Profile
                  </h2>
                  <div className="space-y-1">
                    <Button
                      variant={activeTab === "account" ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => handleTabChange("account")}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Account
                    </Button>
                    <Button
                      variant={activeTab === "orders" ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => handleTabChange("orders")}
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Orders
                    </Button>
                    <Button
                      variant={activeTab === "billing" ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => handleTabChange("billing")}
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Billing
                    </Button>
                    <Button
                      variant={activeTab === "settings" ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => handleTabChange("settings")}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <Tabs
                  value={activeTab}
                  onValueChange={handleTabChange}
                  className="h-full space-y-6"
                >
                  <div className="space-between flex items-center">
                    <TabsList>
                      <TabsTrigger value="account" className="relative">
                        Account
                      </TabsTrigger>
                      <TabsTrigger value="orders">Orders</TabsTrigger>
                      <TabsTrigger value="billing">Billing</TabsTrigger>
                      <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>
                    <div className="ml-auto mr-4">
                      <Button variant="ghost">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span className="hidden lg:block">Logout</span>
                      </Button>
                    </div>
                  </div>
                  <TabsContent
                    value="account"
                    className="border-none p-0 outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Account
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Manage your account settings and preferences.
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                      <aside className="-mx-4 lg:w-1/5">
                        <div className="flex justify-center">
                          <Image
                            src="/images/profile-pic.jpeg"
                            alt="User Avatar"
                            width={100}
                            height={100}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex justify-center mt-4">
                          <Button variant="outline" size="sm">
                            Change Avatar
                          </Button>
                        </div>
                      </aside>
                      <div className="flex-1 lg:max-w-2xl">
                        <form>
                          <div className="space-y-4">
                            <div className="grid gap-2">
                              <Label htmlFor="name">Name</Label>
                              <Input id="name" placeholder="John Doe" />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                placeholder="john.doe@example.com"
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="phone">Phone</Label>
                              <Input
                                id="phone"
                                placeholder="+90 555 555 55 55"
                              />
                            </div>
                            <Button>Update Account</Button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent
                    value="orders"
                    className="border-none p-0 outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Order History
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          View and manage your recent orders.
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Order #12345</CardTitle>
                          <CardDescription>
                            Placed on February 12, 2025
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between">
                            <span>Running Shoes X1000</span>
                            <span>$129.99</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline">View Details</Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Order #12344</CardTitle>
                          <CardDescription>
                            Placed on February 10, 2025
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between">
                            <span>Casual Sneakers C200</span>
                            <span>$89.99</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline">View Details</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent
                    value="billing"
                    className="border-none p-0 outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Billing
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Manage your payment methods and billing address.
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Payment Methods</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <CreditCard className="h-6 w-6" />
                              <div>
                                <p className="font-medium">
                                  Visa ending in 1234
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Expires 12/2024
                                </p>
                              </div>
                            </div>
                            <Button variant="ghost">Edit</Button>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button>Add New Payment Method</Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Billing Address</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>John Doe</p>
                          <p>123 Main St</p>
                          <p>Anytown, ST 12345</p>
                          <p>United States</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline">Edit Address</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent
                    value="settings"
                    className="border-none p-0 outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Settings
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Manage your account settings and preferences.
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="language">Language</Label>
                        <select
                          id="language"
                          className="w-full p-2 border rounded"
                        >
                          <option>English</option>
                          <option>Turkish</option>
                        </select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="notifications">
                          Email Notifications
                        </Label>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="notifications"
                            className="rounded"
                          />
                          <Label htmlFor="notifications">
                            Receive promotional emails
                          </Label>
                        </div>
                      </div>
                      <Button>Save Settings</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
