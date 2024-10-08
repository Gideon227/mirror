import Image from "next/image";
import { AiOutlineDelete  } from "react-icons/ai";

const UploadImage = ({ setImages, images, previewSources, setPreviewSources, uploadSuccess }) => {
  

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    previewFiles(files)
  };


  // const handleFileInputChange = (e) => {
  //   const file = e.target.files[0];
  //   setImages(file);
  // };


  const previewFiles = (files) => {
    const newPreviews = files.map((file) => {
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    // Once all previews are generated, update the state
    Promise.all(newPreviews)
      .then((dataUrls) => setPreviewSources(dataUrls))
      .catch((err) => console.error("Error reading file", err));
  };


  const deletePreviewImage = (index) => {
    const updatedPreviews = previewSources.filter((_, i) => i !== index);
    setPreviewSources(updatedPreviews);

    const updatedFiles = images.filter((_, i) => i !== index);
    setImages(updatedFiles);
  };

  return (
    <div>
         <form>
            <input
                type="file"
                name="image"
                multiple
                onChange={handleFileInputChange}
                accept="image/*"
                className='text-sm text-gray-500 p-12 cursor-pointer'
            />
      </form>

        {previewSources && (
          <div className="flex gap-x-2">
            {previewSources.map((image, index) => (
              <div key={index}>
                <button onClick={deletePreviewImage} className="">
                  <AiOutlineDelete  />
                </button>
                <Image
                    src={image}
                    width={200}
                    height={300}
                    alt="product image"
                />
              </div>
            ))
            
          }
          </div>
        )} 


        {uploadSuccess && <p>{uploadSuccess}</p>}
    </div>
  )
}

export default UploadImage