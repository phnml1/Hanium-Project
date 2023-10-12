// types.ts
interface Payload {
  sectionDecision: string;
  boxVolume: string;
  boxWeight: string;
  percentCondition: string;
  section1: string;
  section2: string;
  section3: string;
}

export interface MonitoringDataType {
  timestamp: number;
  payload: Payload;
}

