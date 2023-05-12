import { createContext } from "react";
import { UserService, WidgetService, WidgetFilterService } from "../services";

export const UserServiceContext = createContext<UserService | undefined>(UserService.getInstance());
export const WidgetServiceContext = createContext<WidgetService | undefined>(WidgetService.getInstance());
export const WidgetFilterServiceContext = createContext<WidgetFilterService | undefined>(WidgetFilterService.getInstance());
