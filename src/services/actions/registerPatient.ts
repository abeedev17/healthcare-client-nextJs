"use server";

export const registerPatient = async (data: FormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-patient`, {
    method: "POST",
    body: data,
    cache: "no-store",
  });
  const patientInfo = await res.json();
  return patientInfo;
};
