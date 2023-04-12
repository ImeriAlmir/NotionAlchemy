import { createContext } from "react";
import { UserService, WidgetService } from "../services";

export const UserServiceContext = createContext<UserService | undefined>(UserService.getInstance());
export const WidgetServiceContext = createContext<WidgetService | undefined>(WidgetService.getInstance());
