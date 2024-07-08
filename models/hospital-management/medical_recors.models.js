import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    hospitalId: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
    visitDate: {
        type: Date,
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    treatment: {
        type: String,
        required: true
    },
    medications: [{
        name: String,
        dosage: String,
        frequency: String
    }],
    notes: {
        type: String
    },
    followUpDate: {
        type: Date
    },
    attachments: [{
        filename: String,
        url: String
    }]
}, { timestamps: true });

export const MedicalRecord = mongoose.model(
    'MedicalRecord',
    medicalRecordSchema
);
