import { apiSlice } from './apiSlice';

export const skillsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query({
      query: ({ category } = {}) => {
        const params = new URLSearchParams();
        if (category) params.append('category', category);
        return `/skills?${params}`;
      },
      providesTags: ['Skills'],
    }),
    getSkillsGrouped: builder.query({
      query: () => '/skills/grouped',
      providesTags: ['Skills'],
    }),
    createSkill: builder.mutation({
      query: (data) => ({
        url: '/skills',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Skills'],
    }),
    updateSkill: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/skills/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Skills'],
    }),
    deleteSkill: builder.mutation({
      query: (id) => ({
        url: `/skills/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Skills'],
    }),
  }),
});

export const {
  useGetSkillsQuery,
  useGetSkillsGroupedQuery,
  useCreateSkillMutation,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
} = skillsApi;
