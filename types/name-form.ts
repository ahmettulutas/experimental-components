export type NameFormData = {
  name: string;
};

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof NameFormData]?: string[];
  };
}
