import { ITattoo } from "../tattoos/tattoo.interface";

export type SchedulingTimes = {
  start: string;
  end: string;
};

export type SchedulingDTO = {
  sunday: SchedulingTimes[];
  monday: SchedulingTimes[];
  tuesday: SchedulingTimes[];
  wednesday: SchedulingTimes[];
  thursday: SchedulingTimes[];
  friday: SchedulingTimes[];
  saturday: SchedulingTimes[];
};

export type TattooArtist = {
  id: number;
  userId: number;
  name: string;
  schedulings: SchedulingDTO;
  tattoos: ITattoo[];
};
