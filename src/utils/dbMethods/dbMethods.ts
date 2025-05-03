import Event from "@/models/events";
import Feedback from "@/models/feedback";
import Gallery from "@/models/gallery";
import Person from "@/models/person";
import Project from "@/models/project";
import mongoose from "mongoose";
export async function addEvent(
  name: string,
  category: string,
  description: string,
  time: string,
  startDate: Date,
  endDate: Date,
  guestName: string[],
  guestDeatils: string[],
  guestImages: string[],
  eventImage: string,
  regqr: string,
  collaborators?: string[],
  collaboratorsDetails?: string[],
  collaboratorsImages?: string[],
  sponsors?: string[],
  sponsorsDetails?: string[],
  sponsorsImages?: string[],
  venue?: string
) {
  return await Event.create({
    name,
    category,
    description,
    time,
    startDate,
    endDate,
    guestName,
    guestDeatils,
    guestImages,
    eventImage,
    regqr,
    collaborators,
    collaboratorsDetails,
    collaboratorsImages,
    sponsors,
    sponsorsDetails,
    sponsorsImages,
    venue,
  });
}

export async function getEvents() {
  return await Event.find();
}

export async function getEvent(id: number) {
  return await Event.findOne({ _id: new mongoose.Types.ObjectId(id) });
}

export async function addImages(
  eventName: string,
  description: string,
  images: string[]
) {
  return await Gallery.create({ eventName, description, images });
}

export async function getImages() {
  return await Gallery.find();
}

export async function getImage(id: number) {
  return await Gallery.findOne({ _id: new mongoose.Types.ObjectId(id) });
}

export async function addPerson(
  name: string,
  role: string,
  designation: string,
  description: string,
  images: string[]
) {
  return await Person.create({ name, role, designation, description, images });
}

export async function getPersons() {
  return await Person.find();
}

export async function getPerson(id: number) {
  return await Person.findOne({ _id: new mongoose.Types.ObjectId(id) });
}

export async function addProject(
  name: string,
  description: string,
  techStack: string[],
  image: string,
  hoistedLink?: string
) {
  return await Project.create({
    name,
    description,
    techStack,
    hoistedLink,
    image,
  });
}
export async function getProjects() {
  return await Project.find();
}

export async function getProject(id: number) {
  return await Project.findOne({ _id: new mongoose.Types.ObjectId(id) });
}

export async function addFeedback(message: string) {
  return await Feedback.create({ message });
}

export async function getFeedbacks() {
  return await Feedback.find();
}
