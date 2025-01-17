import React,{useState , useEffect} from 'react'
import { useNavigate } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPatientInfo } from "../features/patientSlice";

import { useSelector } from "react-redux";



const Dashboard = () => {

  const dispatch = useDispatch();

  const [isEditMode, setIsEditMode] = useState(false);

  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);

  
  const [formData, setFormData] = useState({

    personalInformation:{   
      name: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      emergencyContact: "",
      occupation: "",
      address: {
        primary: "",
        secondary: "",
        city: "",
        state: "",
        zip: ""
      }
    },
 
    medicalInformation: {
      primaryCarePhysician: "",
      insuranceProvider: "",
      insurancePolicyNumber: "",
      allergies: "",
      currentMedication: "",
      familyMedicalHistory: "",
      pastMedicalHistory: "",
    },
    identification: {
      idNumber: "",
      idDocumentPath: "",
    },
  });

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(
          "https://doctor-appointment-backend-ebon.vercel.app/api/patient/profile",
          { headers: { Authorization: `${token}` } }
        );
        if (response.data.data) {
          setFormData(response.data.data); 
          setIsEditMode(true);
        }
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatient();
  }, []);
 

  
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested objects
    const keys = name.split(".");
    if (keys.length > 1) {
      setFormData((prevState) => {
        let updatedData = { ...prevState };
        let nestedObject = updatedData;
        keys.forEach((key, index) => {
          if (index === keys.length - 1) {
            nestedObject[key] = value;
          } else {
            nestedObject = nestedObject[key];
          }
        });
        return updatedData;
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };



 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isEditMode
      ? "https://doctor-appointment-backend-ebon.vercel.app/api/update-patient"
      : "https://doctor-appointment-backend-ebon.vercel.app/api/register-patient";

    try {
      const response = await axios({
        method: isEditMode ? "put" : "post",
        url: endpoint,
        data: formData,
        headers: { Authorization: `${token}` },
      });
      console.log(response.data.message);
      dispatch(setPatientInfo(response.data.data));
      navigate('/book-appointment')
    } catch (error) {
      console.error("Error submitting patient data:", error);
      alert("Failed to submit patient data.");
    }
  };


  return (
<div className="container mt-5">
      <h2 className="mb-4 text-white-50 fw-bolder">   {isEditMode ? "Update Patient Information" : "Patient Personal Information"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control profile-input"
              name="personalInformation.name"
              value={formData.personalInformation.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control profile-input"
              name="personalInformation.email"
              value={formData.personalInformation.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control profile-input"
              name="personalInformation.phone"
              value={formData.personalInformation.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control profile-input"
              name="personalInformation.dateOfBirth"
              value={formData.personalInformation.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"


            
            name="personalInformation.gender"
            value={formData.personalInformation.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Emergency Contact</label>
            <input
              type="text"
              className="form-control profile-input"
              name="personalInformation.emergencyContact"
              value={formData.personalInformation.emergencyContact}
              onChange={handleChange}
              placeholder="123-456-7890"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Occupation</label>
            <input
              type="text"
              className="form-control profile-input"
              name="personalInformation.occupation"
              value={formData.personalInformation.occupation}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <h4>Address</h4>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Primary Address</label>
            <input
              type="text"
              className="form-control profile-input"
              name="personalInformation.address.primary"
              value={formData.personalInformation.address.primary}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Secondary Address</label>
            <input
              type="text"
              className="form-control profile-input"
              name="personalInformation.address.secondary"
              value={formData.personalInformation.address.secondary}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control profile-input"
              name="personalInformation.address.city"
              value={formData.personalInformation.address.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-control profile-input"
              name="personalInformation.address.state"
              value={formData.personalInformation.address.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Zip Code</label>
            <input
              type="text"
              className="form-control profile-input"
              name="personalInformation.address.zip"
              value={formData.personalInformation.address.zip}
              onChange={handleChange}
              required
            />
          </div>
        </div>





        {/* Medical Information */}

        <h2 className="mb-4 text-white-50 fw-bolder">Medical Information</h2>
          
        <div className="mb-3">
          <label className="form-label">Primary Care Physician</label>
          <select
            className="form-select"
            name="medicalInformation.primaryCarePhysician"
            value={formData.medicalInformation.primaryCarePhysician}
            onChange={handleChange}
            required
          >
          
            <option value="john doe">Dr .john doe</option>
            <option value="jane">DR. jane doe</option>
       
          </select>
        </div>


        <div className="row mb-3">
      
          <div className="col-md-6">
            <label className="form-label">Insurance Provider</label>
            <input
              type="text"
              className="form-control profile-input"
              name="medicalInformation.insuranceProvider"
              value={formData.medicalInformation.insuranceProvider}
              onChange={handleChange}
            />
          </div>
          <div className=" col-md-6 mb-3">
          <label className="form-label">Past Medical History</label>
          <textarea
            className="form-control profile-input text-white-50"
            name="medicalInformation.pastMedicalHistory"
            value={formData.medicalInformation.pastMedicalHistory}
            onChange={handleChange}
          />
        </div>

        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Insurance Policy Number</label>
            <input
              type="text"
              className="form-control profile-input"
              name="medicalInformation.insurancePolicyNumber"
              value={formData.medicalInformation.insurancePolicyNumber}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Allergies</label>
            <input
              type="text"
              className="form-control profile-input"
              name="medicalInformation.allergies"
              value={formData.medicalInformation.allergies}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Current Medication</label>
            <input
              type="text"
              className="form-control profile-input"
              name="medicalInformation.currentMedication"
              value={formData.medicalInformation.currentMedication}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Family Medical History</label>
            <textarea
              className="form-control profile-input text-white-50"
              name="medicalInformation.familyMedicalHistory"
              value={formData.medicalInformation.familyMedicalHistory}
              onChange={handleChange}
            />
          </div>
        </div>

        
      {/* Identification Section */}
      <h2 className="mb-4 text-white-50 fw-bolder">Identification</h2>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">ID Number</label>
            <input
              type="text"
              className="form-control profile-input"
              name="identification.idNumber"
              value={formData.identification.idNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">ID Document Path</label>
            <input
              type="text"
              className="form-control profile-input"
              name="identification.idDocumentPath"
              value={formData.identification.idDocumentPath}
              onChange={handleChange}
              required
            />
          </div>
        </div>






        <button type="submit" className="btn btn-primary w-100 mb-5">
        {isEditMode ? "Update Information" : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default Dashboard