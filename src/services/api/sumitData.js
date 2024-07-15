export const submitData = async (values) => {
  try {
    const response = await fetch(
      "https://66941128c6be000fa07e0d57.mockapi.io/answers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit data");
    }
  } catch (error) {
    console.error("Error submitting data:", error);
  }
};
