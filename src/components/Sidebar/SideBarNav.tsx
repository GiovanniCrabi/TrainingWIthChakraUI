import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodFill } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";


export function SideBarNav() {
  return (
    <Stack spacing='12' align='flex-start' >

      <NavSection title="General">
        <NavLink icon={RiDashboardLine} href='/dashboard'> Dashboard </NavLink>
        <NavLink icon={RiContactsLine} href='/users'> Users </NavLink>
      </NavSection>

      <NavSection title="Automation">
        <NavLink icon={RiInputMethodFill} href='/forms'> Forms </NavLink>
        <NavLink icon={RiGitMergeLine} href='/automation'> Automation </NavLink>
      </NavSection>
      
    </Stack>
  );
}