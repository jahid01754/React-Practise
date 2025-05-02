export default function CreateStory({ stories }) {
  return (
    <div>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>{story.label}</li>
        ))}
        <li>Create Story</li>
      </ul>
    </div>
  );
}
