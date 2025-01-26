export default function submit(url: string, data: FormData) {
  data.append("userId", "1");
  data.append("makerId", "1");

  const shownData: string[] = [];
  for (const [key, value] of data.entries()) {
    shownData.push(`${key}: ${value}`);
  }
  alert(shownData);
}
