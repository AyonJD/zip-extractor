import JSZip from 'jszip';
import { useState } from 'react';
import './App.css';
import logo from './assets/archive-logo.png'

function App() {
  const [about, setAbout] = useState({});
  const [details, setDetails] = useState();

  const extensions = [
    "7z",
    "zipx",
    "rar",
    "tar",
    "exe",
    "dmg",
    "iso",
    "zip",
    "msi",
    "nrg",
    "gz",
    "cab",
    "bz2",
    "wim",
    "ace",
    "alz",
    "ar",
    "arc",
    "arj",
    "bin",
    "cdi",
    "chm",
    "cpt",
    "cpio",
    "cramfs",
    "crunch",
    "deb",
    "dd",
    "dms",
    "ext",
    "fat",
    "format",
    "gpt",
    "hfs",
    "ihex",
    "lbr",
    "lzh",
    "lzma",
    "lzm",
    "mbr",
    "mdf",
    "nsa",
    "nds",
    "nsis",
    "ntfs",
    "pit",
    "pak",
    "pdf",
    "pp",
    "qcow2",
    "rpm",
    "sar",
    "squashfs",
    "squeeze",
    "sit",
    "sitx",
    "swf",
    "udf",
    "uefi",
    "vdi",
    "vhd",
    "vmdk",
    "warc",
    "xar",
    "xz",
    "z",
    "zoo",
    "zi",
    "jar",
  ];

  const handleUploads = (e) => {
    if (
      e?.name.includes(".zip") ||
      e?.name.includes(".7z") ||
      e?.name.includes(".dmg") ||
      e?.name.includes(".zipx") ||
      e?.name.includes(".rar") ||
      e?.name.includes(".tar") ||
      e?.name.includes(".exe")
    ) {
      setAbout(e);
      JSZip.loadAsync(e).then((data) => {
        setDetails(data.files);
      });
    } else {
      document.getElementById("details-section").style.display = "block";
      document.getElementById("container").style.display = "none";
      document.getElementById("errorSection").style.display = "block";
      document.getElementById("details-section").classList.add("text-rose-500");
      document.getElementById("details-section").innerText =
        "Unsupported File Format";
    }
  };

  return (
    <div className="h-screen">
      <div className="container lg:w-1/2 mx-auto" id="container">
        <div className="header-text py-10">
          <h1 className="text-3xl font-bold text-center flex justify-center items-center">
            <img
              src={logo}
              alt=""
              className="w-20 mr-3"
            />
            Online Extractor
          </h1>
          <p className="text-center md:w-72 mx-auto mt-5">
            Online Extractor is a web application that allows you to extract nearly any file format(60+) what is archived in a variety of ways.
          </p>
        </div>

        <div>
          <div
            className={`mx-auto bg-white w-3/4 py-20 border border-1 rounded`}
            id="fileSection"
          >
            <div id="upload-section" className="text-center">
              <button
                type="file"
                className="bg-blue-600 text-white px-16 py-3 rounded-md"
              >
                <div className="text-xl">Choose File</div>
                <small className="text-light">From Your Computer</small>
              </button>
            </div>

            <div
              id="online-storages-container"
              className="text-center flex justify-center gap-4 my-3"
            >
              <span
                id="gDrive"
                className="hover:text-blue-500 hover:underline flex items-center gap-2 cursor-pointer"
              >
                <div className="gdrive-icon"></div>Google Drive
              </span>
              <a href="g" className="hover:text-blue-500 hover:underline">
                <i class="fa-brands fa-dropbox"></i> Dropbox
              </a>
              <span
                href="g"
                className="hover:text-blue-500 hover:underline flex items-center cursor-pointer"
              >
                <i class="fa-solid fa-link text-slate-700 hover:text-slate-900"></i>{" "}
                URL
              </span>
            </div>

            <div className="flex justify-center">
              <div id="drop_zone demo">
                <input
                  onChange={(e) => handleUploads(e.target.files[0])}
                  type="file"
                  id="file"
                  onClick={(e) => e.preventDefault()}
                  className="custom-file-input"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="details-section">
          <h1 className="text=2xl font-bold">Name: Example</h1>
          <h1 className="text=2xl font-bold">
            Size: Example
          </h1>
        </div>
      </div>

      <div
        id="errorSection"
        className="mt-5 flex items-center justify-center"
      >
        <h1 className="text-2xl">
          You have Selected Unsupported file format{" "}
          <span
            className="cursor-pointer text-blue-500 underline"
            onClick={() => window.location.reload()}
          >
            Reload
          </span>
        </h1>
      </div>
    </div>
  );
}

export default App;
