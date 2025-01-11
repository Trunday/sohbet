import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

// Maksimum dosya boyutu (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// İzin verilen dosya türleri
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/gif"];

const upload = async (file) => {
  // Dosya boyutu kontrolü
  if (file.size > MAX_FILE_SIZE) {
    throw new Error("Dosya boyutu 5MB'den büyük olamaz.");
  }

  // Dosya türü kontrolü
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    throw new Error("İzin verilmeyen dosya türü.");
  }

  const date = new Date();
  const storageRef = ref(storage, `images/${date + file.name}`);

  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        reject("Something went wrong!" + error.code);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};

export default upload;
